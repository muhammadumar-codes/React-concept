
const Child = ([user]) => {


  console.log("The Child is Rendering");  
  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid black" }}>   
      <h2>Child Component</h2>
      <p>User Name: {user[0]}</p>
    </div>
  );
} 
export default Child;
