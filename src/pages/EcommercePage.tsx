import React, { useState } from 'react';
import { 
  ShoppingBag, CreditCard, Truck, Check, ArrowRight, ShieldCheck, 
  Plus, Minus, Trash2, X, Sparkles, Tag, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { playClickSound, playPopSound, playSuccessSound } from '../utils/audio';

interface EcommercePageProps {
  onNavigate: (path: string) => void;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: string;
  badge?: string;
}

interface CartItem extends Product {
  quantity: number;
}

export const EcommercePage: React.FC<EcommercePageProps> = ({ onNavigate }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'card' | 'apple' | 'bakong'>('card');

  const products: Product[] = [
    {
      id: 'p1',
      name: 'Terracotta Minimalist Planter',
      category: 'Home & Ceramics',
      price: 48,
      image: '/assets/images/wix_asset_0.jpg',
      rating: '4.9 (128)',
      badge: 'Best Seller'
    },
    {
      id: 'p2',
      name: 'Handcrafted Ceramic Mug',
      category: 'Home & Ceramics',
      price: 24,
      image: '/assets/images/wix_asset_6.jpg',
      rating: '5.0 (84)'
    },
    {
      id: 'p3',
      name: 'Artisan Stoneware Bowl',
      category: 'Home & Ceramics',
      price: 36,
      image: '/assets/images/wix_asset_7.jpg',
      rating: '4.8 (62)',
      badge: 'Handmade'
    },
    {
      id: 'p4',
      name: 'Heavyweight Embroidered Hoodie',
      category: 'Apparel',
      price: 89,
      image: '/assets/images/custom-threads.png',
      rating: '4.9 (210)',
      badge: 'Trending'
    },
    {
      id: 'p5',
      name: 'Studio Botanical Hair Serum',
      category: 'Beauty',
      price: 52,
      image: '/assets/images/hero-gel-bottle.png',
      rating: '4.9 (145)'
    },
    {
      id: 'p6',
      name: 'Editorial Art & Architecture Folio',
      category: 'Publications',
      price: 65,
      image: '/assets/images/custom-folio-books.png',
      rating: '5.0 (92)',
      badge: 'Limited Run'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    playPopSound();
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    playClickSound();
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const removeItem = (id: string) => {
    playClickSound();
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingThreshold = 100;
  const freeShippingProgress = Math.min(100, (subtotal / shippingThreshold) * 100);

  const handleCheckout = () => {
    playSuccessSound();
    setCheckoutComplete(true);
    setTimeout(() => {
      setCheckoutComplete(false);
      setIsCheckoutModalOpen(false);
      setCart([]);
      setIsCartOpen(false);
    }, 2200);
  };

  return (
    <div className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-20">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-[#116DFF]">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Wix Stores • Enterprise eCommerce</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-[-0.035em] text-[#0F172A] leading-[1.1]">
            Sell online with a complete eCommerce platform
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
            From multi-currency checkout and automated tax to seamless drop-shipping and omnichannel inventory. Powering over $14B+ in digital commerce annually.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button 
              onClick={() => onNavigate('/builder/drag-and-drop')}
              className="px-7 py-3.5 rounded-full text-sm font-medium bg-[#0F172A] hover:bg-black text-white shadow-md transition-all flex items-center gap-2"
            >
              <span>Build Your Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="px-6 py-3.5 rounded-full text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#116DFF]" />
              <span>View Cart ({totalItemsCount})</span>
            </button>
          </div>
        </div>

        {/* Real Commerce Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">$14B+</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Annual GMV Processed</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">99.99%</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Checkout Uptime SLA</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">130+</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Currencies & Gateways</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-semibold text-emerald-600 tracking-tight">0%</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Platform Surcharge</div>
          </div>
        </div>

        {/* Master Showcase Banner with Real Wix CDN Photography */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="p-8 sm:p-12 lg:col-span-5 space-y-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[#116DFF] font-semibold">
                Next-Gen Storefront
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                Designed to sell anything, anywhere in the world
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect your online store directly with Instagram Shop, TikTok Shop, Amazon, and physical point-of-sale hardware. All synchronized with zero stock collisions.
              </p>
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#116DFF]" />
                  <span>Real-time inventory sync across web & social</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#116DFF]" />
                  <span>Automated cross-border customs & VAT calculation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#116DFF]" />
                  <span>Integrated abandoned-cart email recovery series</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 h-[360px] sm:h-[440px] overflow-hidden">
              <img 
                src="/assets/images/wix-ecommerce.jpg" 
                alt="Wix eCommerce Dashboard and Storefront" 
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>
        </div>

        {/* Interactive Storefront Simulator */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Interactive Storefront Catalog</h3>
              <p className="text-sm text-slate-500 mt-0.5">Test the frictionless product browsing, bag drawer, and payment flow.</p>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Home & Ceramics', 'Apparel', 'Beauty', 'Publications'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0F172A] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid with Real Wix CDN Assets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(p => (
              <div 
                key={p.id} 
                className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all p-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white relative border border-slate-100">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    {p.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-semibold text-slate-900 shadow-sm border border-slate-200">
                        {p.badge}
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{p.category}</span>
                    <h4 className="text-base font-semibold text-slate-900 mt-0.5 group-hover:text-blue-600 transition-colors">{p.name}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-semibold text-slate-900">${p.price}.00</span>
                      <span className="text-xs text-slate-500 font-medium">★ {p.rating}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(p)}
                  className="w-full mt-5 py-2.5 rounded-xl text-xs font-semibold bg-[#116DFF] hover:bg-[#0E5CD8] text-white shadow-xs transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Slide-over Cart Drawer */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
              onClick={() => setIsCartOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="w-5 h-5 text-[#116DFF]" />
                    <h3 className="text-base font-semibold text-slate-900">Your Shopping Bag ({totalItemsCount})</h3>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Free Shipping Meter */}
                <div className="p-4 bg-blue-50/60 border-b border-blue-100 text-xs text-slate-700 space-y-1.5">
                  <div className="flex justify-between font-medium">
                    <span>
                      {subtotal >= shippingThreshold 
                        ? '🎉 You unlocked Free Express Shipping!' 
                        : `Add $${shippingThreshold - subtotal}.00 more for Free Shipping`}
                    </span>
                    <span>{Math.round(freeShippingProgress)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-blue-200/60 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#116DFF] transition-all duration-300"
                      style={{ width: `${freeShippingProgress}%` }}
                    />
                  </div>
                </div>

                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-16 space-y-3">
                      <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
                      <p className="text-sm text-slate-500 font-medium">Your shopping bag is empty.</p>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        className="text-xs font-semibold text-[#116DFF] hover:underline"
                      >
                        Explore the catalog
                      </button>
                    </div>
                  ) : (
                    cart.map(item => (
                      <div key={item.id} className="flex gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 rounded-xl object-cover bg-white border border-slate-200" 
                        />
                        <div className="flex-1 min-w-0 space-y-1">
                          <h4 className="text-xs font-semibold text-slate-900 truncate">{item.name}</h4>
                          <span className="text-xs font-medium text-slate-600">${item.price}.00</span>
                          <div className="flex items-center gap-2 pt-1">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold text-slate-900 px-1">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 transition-colors self-start"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer Subtotal & Checkout */}
                {cart.length > 0 && (
                  <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-semibold text-slate-900 text-sm">${subtotal}.00</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Estimated Shipping</span>
                        <span>{subtotal >= shippingThreshold ? 'Free' : '$8.00'}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsCheckoutModalOpen(true)}
                      className="w-full py-3.5 rounded-full text-sm font-semibold bg-[#116DFF] hover:bg-[#0E5CD8] text-white shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Proceed to Checkout • ${subtotal >= shippingThreshold ? subtotal : subtotal + 8}.00</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Interactive Checkout Modal */}
        {isCheckoutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="w-full max-w-lg rounded-3xl bg-white p-7 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative">
              <button 
                onClick={() => setIsCheckoutModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>

              {checkoutComplete ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Order Confirmed!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Wix Payments processed your mock order of <span className="font-semibold text-slate-900">${subtotal >= shippingThreshold ? subtotal : subtotal + 8}.00</span> with 0% platform surcharge.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <span className="text-xs uppercase font-semibold text-blue-600 tracking-wider">Fast Checkout</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">Select Payment Gateway</h3>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedPaymentMethod('card')}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        selectedPaymentMethod === 'card' 
                          ? 'border-[#116DFF] bg-blue-50/50' 
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Credit / Debit Card</div>
                          <div className="text-xs text-slate-500">Visa, Mastercard, Amex, UnionPay</div>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedPaymentMethod === 'card' ? 'border-[#116DFF] bg-[#116DFF]' : 'border-slate-300'
                      }`}>
                        {selectedPaymentMethod === 'card' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedPaymentMethod('apple')}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        selectedPaymentMethod === 'apple' 
                          ? 'border-[#116DFF] bg-blue-50/50' 
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <ShoppingBag className="w-5 h-5 text-slate-900" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Apple Pay / Google Pay</div>
                          <div className="text-xs text-slate-500">1-touch biometric verification</div>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedPaymentMethod === 'apple' ? 'border-[#116DFF] bg-[#116DFF]' : 'border-slate-300'
                      }`}>
                        {selectedPaymentMethod === 'apple' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedPaymentMethod('bakong')}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        selectedPaymentMethod === 'bakong' 
                          ? 'border-[#116DFF] bg-blue-50/50' 
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-red-600" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Bakong KHQR & Southeast Asia Rails</div>
                          <div className="text-xs text-slate-500">Universal QR payment with zero processing fee</div>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedPaymentMethod === 'bakong' ? 'border-[#116DFF] bg-[#116DFF]' : 'border-slate-300'
                      }`}>
                        {selectedPaymentMethod === 'bakong' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="flex justify-between text-slate-600">
                      <span>Items Subtotal:</span>
                      <span className="font-semibold text-slate-900">${subtotal}.00</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Total Due:</span>
                      <span className="font-bold text-slate-900 text-sm">${subtotal >= shippingThreshold ? subtotal : subtotal + 8}.00</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-full text-sm font-semibold bg-[#0F172A] hover:bg-black text-white shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Authorize Mock Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
