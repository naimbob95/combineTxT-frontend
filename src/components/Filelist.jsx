function FilelistComponent() {

    var file = localStorage.getItem("items");
    // http://localhost:3000/download/`+file
    const handleSubmit = async (e) => {
        window.open('http://localhost:3000/download/' + file);

    }

    const deleteSubmit = async (e) => {
        await fetch('http://localhost:3000/file/'+file, { method: 'DELETE' });
        localStorage.clear();

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