const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-2xl font-extrabold font-heading mb-1">AIRCON WORKS</p>
        <p className="text-navy-foreground/60 italic text-sm mb-4">Cool Air, Cool Life</p>
        <p className="text-navy-foreground/50 text-xs">
          © {new Date().getFullYear()} Aircon Works — Refrigeration & Airconditioning Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
