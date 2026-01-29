
import React, { useState, useRef, useEffect } from 'react';
import { ProjectData } from '../types.ts';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  
  // 로컬 저장소 키 생성 함수
  const getStorageKey = (slot: string) => `vc-portfolio-p${project.id}-${slot}`;

  // 개별 슬롯별 로컬 상태 관리 - 초기값으로 localStorage 확인
  const [localCover, setLocalCover] = useState<string | null>(() => {
    try {
      return localStorage.getItem(getStorageKey('cover'));
    } catch (e) {
      return null;
    }
  });
  const [localDoc1, setLocalDoc1] = useState<string | null>(() => {
    try {
      return localStorage.getItem(getStorageKey('doc1'));
    } catch (e) {
      return null;
    }
  });
  const [localDoc2, setLocalDoc2] = useState<string | null>(() => {
    try {
      return localStorage.getItem(getStorageKey('doc2'));
    } catch (e) {
      return null;
    }
  });
  
  const coverInputRef = useRef<HTMLInputElement>(null);
  const doc1InputRef = useRef<HTMLInputElement>(null);
  const doc2InputRef = useRef<HTMLInputElement>(null);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: (val: string | null) => void,
    slot: string
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setter(result);
        try {
          localStorage.setItem(getStorageKey(slot), result);
        } catch (err) {
          console.warn("Storage limit exceeded or unavailable", err);
        }
      };
      reader.readAsDataURL(file);
    }
    e.target.value = '';
  };

  const displayCover = localCover || (project.images && project.images[0]);
  const displayDoc1 = localDoc1 || (project.images && project.images[1]);
  const displayDoc2 = localDoc2 || (project.images && project.images[2]);

  return (
    <div id={`project-${project.id}`} className="group border-t border-gray-100 pt-8 transition-all scroll-mt-24">
      {/* 이미지 확대 모달 (라이트박스) */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          onClick={() => setZoomImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setZoomImage(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={zoomImage} 
            className="max-w-full max-h-full object-contain shadow-2xl animate-fade-in" 
            alt="Enlarged view"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      {/* 프로젝트 헤더 */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
        <div>
          <span className="text-xs text-gray-400 mono mb-1 block">Project {project.id}</span>
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">{project.subtitle}</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2 justify-end">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-gray-50 text-gray-400 border border-gray-100 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 메인 프리뷰 슬롯 */}
      <div 
        className="relative min-h-[300px] md:min-h-[400px] bg-gray-50 mb-8 overflow-hidden rounded-sm transition-all duration-500 border border-gray-100 flex items-center justify-center group/preview"
      >
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          ref={coverInputRef} 
          onChange={(e) => handleFileChange(e, setLocalCover, 'cover')} 
        />
        
        {displayCover ? (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
              src={displayCover} 
              alt={project.title} 
              className="max-w-full max-h-[600px] object-contain cursor-zoom-in transition-transform duration-700 hover:scale-[1.01]"
              onClick={() => setZoomImage(displayCover)}
            />
            {/* 개별 업로드 버튼 */}
            <button 
              onClick={(e) => { e.stopPropagation(); coverInputRef.current?.click(); }}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 text-[9px] mono uppercase tracking-widest shadow-sm border border-gray-100 opacity-0 group-hover/preview:opacity-100 transition-opacity hover:bg-white"
            >
              이미지 교체
            </button>
          </div>
        ) : (
          <div 
            className="flex flex-col items-center space-y-3 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer w-full h-full justify-center"
            onClick={() => coverInputRef.current?.click()}
          >
            <svg className="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-xs mono uppercase tracking-widest">메인 이미지 업로드</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {project.overview}
        </p>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-xs font-bold uppercase tracking-widest flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors py-2"
        >
          <span>{isOpen ? 'Close Case Study' : 'View Full Case Study'}</span>
          <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* 상세 케이스 스터디 (확장 시) */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[15000px] mt-8 pb-12' : 'max-h-0'}`}>
        <div className="bg-white p-6 md:p-12 space-y-16 border border-gray-100 rounded-sm shadow-sm">
          {/* 역할 및 개요 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div className="md:col-span-1">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 mono">Project Role</h4>
                <p className="text-sm font-medium text-gray-800">{project.role}</p>
             </div>
             <div className="md:col-span-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 mono">Project Overview</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{project.overview}</p>
             </div>
          </div>

          {/* 프로젝트 상세 내용 */}
          <div className="space-y-20">
            {project.chapters ? (
              project.chapters.map((chapter, i) => (
                <div key={i} className="space-y-8 pt-12 border-t border-gray-100">
                  <div>
                    <h4 className="text-xl font-bold mb-1">{chapter.title}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{chapter.subtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-4 mono">Perspective / Approach</h5>
                      <p className="text-sm text-gray-700 leading-relaxed">{chapter.perspective}</p>
                    </div>
                    <div className="md:col-span-1">
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 mono">Deliverables</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        {chapter.deliverables.map((d, j) => <li key={j} className="flex items-start"><span className="mr-2 text-blue-300">•</span>{d}</li>)}
                      </ul>
                    </div>
                    <div className="md:col-span-1">
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 mono">Outcome</h5>
                      <p className="text-sm font-medium text-gray-800">{chapter.outcome}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-gray-100">
                <div className="md:col-span-2">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-4 mono">Perspective / Approach</h5>
                  <p className="text-sm text-gray-700 leading-relaxed">{project.perspective}</p>
                </div>
                <div className="md:col-span-1">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 mono">Deliverables</h5>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {project.deliverables?.map((d, j) => <li key={j} className="flex items-start"><span className="mr-2 text-blue-300">•</span>{d}</li>)}
                  </ul>
                </div>
                <div className="md:col-span-1">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 mono">Outcome</h5>
                  <p className="text-sm font-medium text-gray-800">{project.outcome}</p>
                </div>
              </div>
            )}
          </div>

          {/* 하단 상세 이미지 슬롯 */}
          <div className="space-y-8 pt-12 border-t border-gray-100">
             <div className="flex items-center justify-between">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mono">Process & Additional Assets</h5>
                <span className="text-[9px] mono text-gray-300 italic">클릭하여 확대하거나 이미지를 업로드하세요.</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 왼쪽 상세 슬롯 */}
                <div 
                  className="relative w-full bg-gray-50 flex items-center justify-center rounded-sm border border-gray-100 p-4 min-h-[300px] transition-all group/slot1"
                >
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    ref={doc1InputRef} 
                    onChange={(e) => handleFileChange(e, setLocalDoc1, 'doc1')} 
                  />
                  {displayDoc1 ? (
                    <>
                      <img 
                        src={displayDoc1} 
                        className="max-w-full h-auto object-contain shadow-sm cursor-zoom-in transition-transform hover:scale-[1.02]" 
                        alt="Process Left" 
                        onClick={() => setZoomImage(displayDoc1)}
                      />
                      <button 
                        onClick={(e) => { e.stopPropagation(); doc1InputRef.current?.click(); }}
                        className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-2 py-1 text-[8px] mono uppercase shadow-sm border border-gray-100 opacity-0 group-hover/slot1:opacity-100 transition-opacity"
                      >
                        교체
                      </button>
                    </>
                  ) : (
                    <div 
                      className="text-center text-gray-300 hover:text-blue-400 transition-colors cursor-pointer w-full h-full flex flex-col justify-center"
                      onClick={() => doc1InputRef.current?.click()}
                    >
                      <svg className="w-6 h-6 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="text-[9px] mono uppercase tracking-widest block">상세 01 업로드</span>
                    </div>
                  )}
                </div>

                {/* 오른쪽 상세 슬롯 */}
                <div 
                  className="relative w-full bg-gray-50 flex items-center justify-center rounded-sm border border-gray-100 p-4 min-h-[300px] transition-all group/slot2"
                >
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    ref={doc2InputRef} 
                    onChange={(e) => handleFileChange(e, setLocalDoc2, 'doc2')} 
                  />
                  {displayDoc2 ? (
                    <>
                      <img 
                        src={displayDoc2} 
                        className="max-w-full h-auto object-contain shadow-sm cursor-zoom-in transition-transform hover:scale-[1.02]" 
                        alt="Process Right" 
                        onClick={() => setZoomImage(displayDoc2)}
                      />
                      <button 
                        onClick={(e) => { e.stopPropagation(); doc2InputRef.current?.click(); }}
                        className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-2 py-1 text-[8px] mono uppercase shadow-sm border border-gray-100 opacity-0 group-hover/slot2:opacity-100 transition-opacity"
                      >
                        교체
                      </button>
                    </>
                  ) : (
                    <div 
                      className="text-center text-gray-300 hover:text-blue-400 transition-colors cursor-pointer w-full h-full flex flex-col justify-center"
                      onClick={() => doc2InputRef.current?.click()}
                    >
                      <svg className="w-6 h-6 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="text-[9px] mono uppercase tracking-widest block">상세 02 업로드</span>
                    </div>
                  )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
