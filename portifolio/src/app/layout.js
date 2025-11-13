import "./globals.css";


export const metadata = {
  title: "Portifólio",
  description: "Esse é Portilólio, aqui eu falo sobre minhas habilidades, e um pouco da minha historia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        {children}
      </body>
    </html>
  );
}
