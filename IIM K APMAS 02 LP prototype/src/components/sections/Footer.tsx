export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 pb-24 lg:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 pb-8 mb-8">
          <div className="flex items-center justify-center md:justify-start space-x-6">
            <div className="bg-white p-2 rounded w-32 h-12 flex items-center justify-center">
              <span className="text-gray-400 text-xs font-bold uppercase">IIMK Logo</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white p-1 rounded w-16 h-10 flex items-center justify-center">
                <span className="text-gray-400 text-[10px] font-bold uppercase text-center leading-tight">EQUIS</span>
              </div>
              <div className="bg-white p-1 rounded w-16 h-10 flex items-center justify-center">
                <span className="text-gray-400 text-[10px] font-bold uppercase text-center leading-tight">AMBA</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium max-w-sm text-center md:text-right">
            Professional Certificate Programme in AI Powered Marketing, Analytics and Sales
          </p>
        </div>
        
        <div className="text-center md:text-left text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} IIM Kozhikode. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
