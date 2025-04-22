export default function Head() {
  return (
    <>
      <title>Buildbility</title>
      <meta
        name="description"
        content="Streamline hospitality operations with cutting-edge AI for improved hotel and restaurant management and expense reduction."
      />
      <link rel="icon" href="/images/logo2.svg" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Buildbility",
            url: "https://buildbility.com",
            logo: "https://buildbility.com/images/logo2.svg",
          }),
        }}
      />
    </>
  );
}
