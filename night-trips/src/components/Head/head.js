import Head from "next/head";

const HeadComponent = () => {
  const title = "Night Trips Website";
  const description =
    "Night trips, is a jordanian online travel agency for local trips reservations & other travel products.";

  const metaData = [
    {
      name: "description",
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: "Ali Abu Diab",
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: "theme-color",
      content: "#41ead4",
    },
    {
      name: "keywords",
      content: "NightTrips, nightTrips, ni8tTrips, نايت تريبس",
    },
  ];

  return (
    <Head>
      <title>{title}</title>
      <link rel="manifist" href="/manifist.json" />
      <meta charSet="utf-8" />
      <base href="/" />
      {metaData.map(({ name, content }, idx) => (
        <meta key={idx} name={name} content={content} />
      ))}
    </Head>
  );
};

export default HeadComponent;
