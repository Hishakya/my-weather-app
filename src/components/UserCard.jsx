

const UserCard = (usersData) => {
    console.log(234, usersData.usersData.users)
    return (
        <div style={{
            borderRadius: "7px", backgroundColor: "GrayText", padding: "40px",
            display: "flex",
            flexWrap: 'wrap', // prevent overflow of child elements/div , items will go to next row

        }}>
            {usersData?.usersData?.users?.map((val, indx) => (
                // Note: suppose div is 100% wide. 
                // And you want 4 box in a row => 100% /4 = 25%
                // and margin is 5px (For row left & right margin = 5+5 = 10)
                // 25% - 10px
                // boxSizing helps - The entire row of 4 items should fill the available width of its parent container.
                //  calc() and boxSizing works together 
                <div style={{
                    borderRadius: '6px', backgroundColor: "AppWorkspace", padding: "20px", margin: "5px",
                    border: "2px solid #ccc",
                    // height: '150px',
                    width: 'calc(25% - 10px)',
                    // width: "300px",
                    boxSizing: 'border-box',
                }}>
                    <p style={{ textAlign: 'center' }}>{indx + 1}</p>
                    <p>{`Name: ${val.firstName} ${val.lastName}`}</p>
                    <p>Age: {val.age}</p>
                    <p>gender: {val.gender}</p>
                    {/* <p>email: {val.email}</p> */}
                    <p>phone: {val.phone}</p>
                    <p>birthDate: {val.birthDate}</p>
                    <p>address: {val.address.address}</p>
                    <p>City: {val.address.city}</p>
                </div>
            ))}
        </div>
    )
}

export default UserCard