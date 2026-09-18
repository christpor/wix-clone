import React, { useState } from 'react';
import { ShoppingBag, CreditCard, Truck, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface EcommercePageProps {
  onNavigate: (path: string) => void;
}

export const EcommercePage: React.FC<EcommercePageProps> = ({ onNavigate }) => {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 'p1', name: 'Terracotta Matte Vase', price: '$48.00', image: '/assets/images/wix_asset_0.jpg' },
    { id: 'p2', name: 'Handcrafted Ceramic Mug', price: '$24.00', image: '/assets/images/wix_asset_6.jpg' },
    { id: 'p3', name: 'Minimalist Stone Planter', price: '$36.00', image: '/assets/images/wix_asset_7.jpg' }
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#116DFF]">
          eCommerce Engine
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Sell online with a complete eCommerce platform
        </h1>
        <p className="text-base text-[#8F939A]">
          Create a powerful online store with built-in multichannel selling, automated inventory tracking, and seamless payment gateways.
        </p>
      </div>

      {/* Interactive Store Preview */}
      <div className="p-8 rounded-3xl bg-[#16191E] border border-white/10 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h3 className="text-base font-bold text-white">Live Storefront Sandbox</h3>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white">
            <ShoppingBag className="w-3.5 h-3.5 text-[#116DFF]" />
            <span>Bag ({cartCount})</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 p-4 space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-900">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{p.name}</h4>
                  <div className="text-xs font-mono text-[#8F939A]">{p.price}</div>
                </div>
                <button
                  onClick={() => setCartCount(prev => prev + 1)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#116DFF] hover:bg-[#0E5CD8] text-white transition-colors"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
