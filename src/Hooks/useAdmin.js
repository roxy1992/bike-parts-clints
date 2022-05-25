import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                },
                // body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data inside useToken', data);
                    // const accessToken = data.token;
                    // localStorage.setItem('accessToken', accessToken);
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;