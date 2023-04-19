function FilelistComponent() {

    var file = localStorage.getItem("items");
    // http://localhost:3000/download/`+file
    const handleSubmit = async (e) => {
        window.open(import.meta.env.VITE_API_URL+'/download/'+ file);

    }

    const deleteSubmit = async (e) => {
        localStorage.clear();
        window.location.reload();
        await fetch(import.meta.env.VITE_API_URL+'/file/'+file, { method: 'DELETE' });
       

    }


    return (
        <div className="overflow-x-auto mt-3">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>file</th>
                        <th>Download</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>{file}</td>
                        <td onClick={handleSubmit}>download</td>
                        <td onClick={deleteSubmit}>delete</td>
                    </tr>
                    {/* row 2 */}

                    {/* row 3 */}

                </tbody>
            </table>
        </div>)
}

export default FilelistComponent;