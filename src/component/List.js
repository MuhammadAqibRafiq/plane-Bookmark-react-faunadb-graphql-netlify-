import React from "react";

function List({links,loadLinks}) {

    // use in app.js

    // const [links, setLinks] = useState();

    // const loadLinks = async () => {
    //     const res = await fetch('/api/getLinks');
    //     const Links = await res.json();
    //     setLinks(Links)
    //     // console.log(Links);
    // }

    // // console.log("use", links);

    // useEffect(() => {
    //     loadLinks();
    // }, [])

    return (
        <div className="App">
            
            <h1>LIST</h1>

            {links &&
                links.map((elem, ind) => {
                    
                    return <div key={ind} >
                        <div><h3> title:</h3>{elem.title}</div>
                        <div><h3>URL:</h3>{elem.url}</div>

                        <button
                            onClick={async () => {
                                const id = elem._id;
                                try {
                                    await fetch('/api/deleteLink', {
                                        method: 'DELETE',
                                        body: JSON.stringify({ id }),                                    
                                    });
                                    loadLinks();
                                    // console.log(id)     
                                } catch (error) {
                                    console.error('LIST ERROR', error);
                                }
                            }}>
                            DELETE
                        </button>


                    </div> 
                })
            }

        </div>
    );
}

export default List;