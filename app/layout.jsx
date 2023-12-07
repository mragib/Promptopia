import "@styles/globals.css";

export const metaData = {
  title: "Promptopia",
  description: "Discover & share AI prompts",
};

function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default layout;
