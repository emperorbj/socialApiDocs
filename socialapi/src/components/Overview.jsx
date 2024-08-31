const Overview = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 mb-2">
                The SocialAPI provides a way to manage blog posts, including retrieving, creating, updating, and deleting them. This API is designed to be easy to integrate with your application, offering flexibility in how you manage blog content.
            </p>
            <div className="bg-gray-100 p-4 rounded-md">
                <p className="font-semibold">Base URL</p>
                <pre>https://socialapi-kappa.vercel.app/api</pre>
            </div>
        </section>
    );
};

export default Overview;