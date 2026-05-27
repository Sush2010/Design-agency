function Services() {
    return (
        <section className="services" id="services">

            <div className="services-heading">
                <h2>Our Services</h2>

                <p>
                    We create modern digital experiences for brands and businesses.
                </p>
            </div>

            <div className="services-container">

                <div className="service-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                        alt="UI UX Design"
                    />

                    <h3>UI/UX Design</h3>

                    <p>
                        Beautiful and user-friendly designs focused on improving user experience.
                    </p>
                </div>

                <div className="service-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
                        alt="Web Development"
                    />

                    <h3>Web Development</h3>

                    <p>
                        Responsive and modern websites built for performance and scalability.
                    </p>
                </div>

                <div className="service-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Brand Identity"
                    />

                    <h3>Brand Identity</h3>

                    <p>
                        Creative branding solutions including logos, colors, and visual identity.
                    </p>
                </div>

                <div className="service-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                        alt="Mobile App Design"
                    />

                    <h3>Mobile App Design</h3>

                    <p>
                        Clean and engaging mobile app interfaces designed for better usability.
                    </p>
                </div>

            </div>

        </section>
    );
}

export default Services;