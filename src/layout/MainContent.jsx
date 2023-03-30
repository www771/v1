const MainContent = ({ children }) => {
  return (
    <div style={{ maxWidth: "1400px", width: "100%", margin: "50px auto" }}>
      {children}
    </div>
  );
};

export default MainContent;
