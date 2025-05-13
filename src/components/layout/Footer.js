export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nexus Soloutions</h3>
            <p className="text-gray-400">Nexus Solutions provides premium outsourcing services from Egypt to USA, specializing in customer service technical support and medical billing.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Customer Service Technical Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Medical Billing Services</a></li>

            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              456 Business Ave, Suite 789<br />
              Chicago, IL 60601, USA<br />
              info@nexussoloutions.com<br />
              <span>(123) 456-7890</ span>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Nexus Soloutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}