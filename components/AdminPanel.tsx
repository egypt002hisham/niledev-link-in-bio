
import React, { useState, useEffect } from 'react';
import { Consultation } from '../types';
import { INITIAL_CONSULTATIONS } from '../constants';

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [consultations, setConsultations] = useState<Consultation[]>([]);

  const loadData = () => {
    const stored = localStorage.getItem('niledev_consultations');
    if (stored) {
      setConsultations(JSON.parse(stored).sort((a: Consultation, b: Consultation) => b.timestamp - a.timestamp));
    } else {
      // Use defaults if empty
      setConsultations(INITIAL_CONSULTATIONS.sort((a, b) => b.timestamp - a.timestamp));
      localStorage.setItem('niledev_consultations', JSON.stringify(INITIAL_CONSULTATIONS));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'niledev123') {
      setIsAuthenticated(true);
    } else {
      alert('كلمة مرور خاطئة! جرب "niledev123"');
    }
  };

  const toggleShow = (id: string) => {
    const updated = consultations.map(c => 
      c.id === id ? { ...c, showOnMain: !c.showOnMain } : c
    );
    setConsultations(updated);
    localStorage.setItem('niledev_consultations', JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('niledev_data_update'));
  };

  const deleteItem = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الاستشارة نهائياً؟')) {
      const updated = consultations.filter(c => c.id !== id);
      setConsultations(updated);
      localStorage.setItem('niledev_consultations', JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('niledev_data_update'));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm">
        <div className="pixel-border-box p-8 w-full max-w-sm animate-fade-in">
          <h2 className="pixel-font text-emerald-400 mb-6 text-center text-xl tracking-tighter">ADMIN_ACCESS</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input 
              type="password" 
              placeholder="Passphrase"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#111] border-2 border-[#064e3b] p-3 rounded text-white focus:border-emerald-400 outline-none transition-all placeholder:opacity-30"
              autoFocus
            />
            <button 
              type="submit" 
              className="bg-emerald-600 hover:bg-emerald-500 text-black font-bold p-3 rounded pixel-font transition-all active:scale-95"
            >
              EXECUTE
            </button>
            <button type="button" onClick={onClose} className="text-gray-500 text-xs mt-2 uppercase tracking-widest pixel-font">Back to System</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-fade-in">
      <div className="max-w-md mx-auto p-6 pb-20">
        <div className="flex justify-between items-center mb-10 sticky top-0 bg-[#050505]/90 py-4 z-20 backdrop-blur-md border-b border-emerald-900/30">
          <div>
            <h1 className="pixel-font text-emerald-400 text-2xl tracking-tighter">DATA_CTRL</h1>
            <p className="text-[9px] text-emerald-700 font-bold uppercase">Root Session: Active</p>
          </div>
          <button onClick={onClose} className="bg-red-900/20 text-red-500 p-2 rounded text-[10px] px-4 border border-red-900/30 font-bold">TERMINATE</button>
        </div>

        <div className="flex flex-col gap-4">
          {consultations.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-emerald-900/20 rounded-2xl">
              <p className="text-gray-600 mb-2">DB_EMPTY: No logs found.</p>
            </div>
          )}
          {consultations.map(c => (
            <div key={c.id} className="bg-[#0a0a0a] border border-[#1a1a1a] p-5 rounded-xl flex flex-col gap-4">
              <div className="flex justify-between items-start text-[9px] text-gray-500 font-mono">
                <span className="text-emerald-900">#REF_{c.id.slice(0,8).toUpperCase()}</span>
                <span>{new Date(c.timestamp).toLocaleString('ar-EG')}</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed border-r-4 border-emerald-500 pr-3">{c.text}</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => toggleShow(c.id)}
                  className={`flex-1 text-[10px] p-3 rounded font-bold pixel-font transition-all ${c.showOnMain ? 'bg-emerald-600 text-black' : 'bg-gray-800 text-gray-400'}`}
                >
                  {c.showOnMain ? 'VISIBLE' : 'HIDDEN'}
                </button>
                <button onClick={() => deleteItem(c.id)} className="bg-red-900/10 text-red-500 text-[10px] p-3 rounded px-6 border border-red-900/30 font-bold pixel-font">DEL</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
