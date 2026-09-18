import React, { useState } from 'react';
import { Search, CheckCircle2, ArrowRight } from 'lucide-react';

export const DomainSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearched(true);
    }
  };

  const tlds = ['.com', '.store', '.design', '.org', '.io'];

  return (
    <section className="py-16 bg-[#000000] border-y border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#116DFF]">
          Custom Web Addresses
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Create a website, get the perfect domain to match
        </h2>
        <p className="text-sm text-[#8F939A] max-w-xl mx-auto">
          Start your brand with a memorable, customized web address with free SSL and automated DNS setup.
        </p>

        <form 
          onSubmit={handleSearch}
          className="max-w-xl mx-auto flex items-center p-2 rounded-2xl sm:rounded-full bg-[#16191E] border border-white/15 focus-within:border-[#116DFF] transition-colors"
        >
          <div className="flex items-center gap-3 pl-4 w-full">
            <Search className="w-4 h-4 text-[#8F939A]" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearched(false);
              }}
              placeholder="Find your domain name (e.g. mybrand)..."
              className="w-full bg-transparent text-sm text-white placeholder-[#8F939A] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl sm:rounded-full text-xs font-bold uppercase tracking-wider bg-[#116DFF] hover:bg-[#0E5CD8] text-white transition-all shrink-0"
          >
            Search
          </button>
        </form>

        {searched && (
          <div className="p-4 rounded-2xl bg-[#16191E] border border-white/10 max-w-xl mx-auto text-left space-y-2 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-sm font-bold text-white">{query.toLowerCase().replace(/\s+/g, '')}.com</span>
              </div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-green-500/10 text-green-400 border border-green-500/20">
                Available
              </span>
            </div>
            <p className="text-xs text-[#8F939A]">Includes 1 year free domain registration with any annual Premium plan.</p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {tlds.map(tld => (
            <span key={tld} className="px-3 py-1 rounded-full text-xs font-mono text-[#8F939A] bg-white/5 border border-white/10">
              {tld}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
