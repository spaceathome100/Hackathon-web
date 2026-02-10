import { Mail, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg font-bold gradient-text mb-3">TechHacks 2.0</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovating for a sustainable future through technology and collaboration.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3 text-sm">Contact</h4>
            <a
              href="mailto:harisudhan@apesxflowtechnologies.com"
              className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              harisudhan@apesxflowtechnologies.com
            </a>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3 text-sm">Follow Us</h4>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            © 2026 TechHacks 2.0 Innovation Hackathon. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            In Collaboration with Genesys
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
