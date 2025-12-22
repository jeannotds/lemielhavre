'use client';

import { useState } from 'react';
import { Send, Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)]" />
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-white/20 dark:border-slate-700/20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-2xl flex items-center justify-center shadow-xl shadow-brand-orange/30">
                    <Mail className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-3 leading-tight">
                    Subscribe our Newsletter to receive latest updates from us
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
                    Stay connected with our mission. We won't give you spam mails.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 md:h-16 px-6 text-base md:text-lg border-2 border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 rounded-xl focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                  required
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
              </div>
              <Button
                type="submit"
                className="w-full h-14 md:h-16 bg-gradient-to-r from-brand-orange to-brand-orange-dark hover:from-brand-orange-dark hover:to-brand-green text-white text-base md:text-lg font-semibold rounded-xl shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/40 transition-all transform hover:scale-[1.02]"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe Now
                  </>
                )}
              </Button>
              {isSubmitted && (
                <p className="text-green-600 text-sm text-center animate-in fade-in">
                  Thank you for subscribing! Check your email for confirmation.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
