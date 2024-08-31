
const Endpoint = ({ id, title, description, exampleRequest, requestBody, exampleResponse, exampleUpdateResponse, exampleDeleteResponse, errorResponses }) => {
    return (
        <section id={id} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>

            {exampleRequest && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Example Request</h3>
                    <pre className="bg-gray-100 p-4 rounded-md">{exampleRequest}</pre>
                </div>
            )}
            {requestBody && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Request Body</h3>
                    <pre className="bg-gray-100 p-4 rounded-md">{requestBody}</pre>
                </div>
            )}

            {exampleResponse && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Example Response</h3>
                    <pre className="bg-gray-100 p-4 rounded-md">{exampleResponse}</pre>
                </div>
            )}

            {exampleUpdateResponse && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Example Update Response</h3>
                    <pre className="bg-gray-100 p-4 rounded-md">{exampleUpdateResponse}</pre>
                </div>
            )}

            {exampleDeleteResponse && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Example Delete Response</h3>
                    <pre className="bg-gray-100 p-4 rounded-md">{exampleDeleteResponse}</pre>
                </div>
            )}

            {errorResponses && (
                <div>
                    <h3 className="text-xl font-semibold mb-2">Error Responses</h3>
                    <ul className="list-disc pl-6 text-gray-700">
                        {errorResponses.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default Endpoint;