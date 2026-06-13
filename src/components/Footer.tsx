const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold text-white tracking-tighter">
          CH<span className="text-cyan-400">.</span>
        </div>
        
        <div className="text-gray-500 text-sm text-center md:text-left">
          &copy; {currentYear} CH Praveen Kumar. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
