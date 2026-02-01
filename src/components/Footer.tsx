import { Link } from 'react-router-dom';

const footerLinks = {
  pillars: {
    title: 'PILLARS',
    links: [
      { name: 'Iterate', href: '#' },
      { name: 'Evaluate', href: '#' },
      { name: 'Deploy', href: '#' },
      { name: 'Monitor', href: '#' },
    ],
  },
  products: {
    title: 'PRODUCTS',
    links: [
      { name: 'Editor', href: '#' },
      { name: 'Playground', href: '#' },
      { name: 'Evaluations', href: '#' },
      { name: 'Datasets', href: '#' },
      { name: 'Deployments', href: '#' },
      { name: 'Logs', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Gateway', href: '#' },
    ],
  },
  company: {
    title: 'COMPANY',
    links: [
      { name: 'Labs', href: '#' },
      { name: 'Applied', href: '#' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '#' },
      { name: 'Book a Demo', href: '#' },
      { name: 'Wikipedia', href: '#' },
    ],
  },
  resources: {
    title: 'RESOURCES',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'DPA', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Report vulnerability', href: '#' },
    ],
  },
  connect: {
    title: 'CONNECT',
    links: [
      { name: 'Github', href: '#' },
      { name: 'X (Twitter)', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'YouTube', href: '#' },
    ],
  },
};

const Footer = () => {
  return (
    <footer
      className="relative z-50 bg-[#0c0c0c] text-white py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      style={{ backgroundColor: '#0c0c0c', position: 'relative', zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12">
          {/* Logo & Copyright */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              {/* Logo placeholder, can use an SVG or just text */}
              <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">
                AD
              </div>
              <span className="text-xl font-medium tracking-tight">Adaline</span>
            </Link>
            <div className="text-sm text-white/40 mt-auto">
              <p>&copy; 2026 Adaline.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="col-span-1">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
