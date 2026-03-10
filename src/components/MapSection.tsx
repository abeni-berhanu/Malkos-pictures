const MapSection = () => {
  return (
    <section className="bg-malkos-dark">
      <div className="max-w-7xl mx-auto px-6 text-center py-16">
        <p className="text-malkos-orange text-xs uppercase tracking-[0.4em] mb-2">
          Location
        </p>
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
          Stay Located
        </h2>
        <p className="text-gray-500 text-sm uppercase tracking-widest">
          Addis Ababa, Ethiopia | Bole Medhanialem
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="w-full h-[400px] grayscale contrast-125 brightness-50">
        <iframe
          title="Malkos Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11520620358!2d38.7031174!3d8.9631768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710000000000!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default MapSection;
