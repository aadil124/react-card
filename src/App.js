import CardData from "./components/CardData.jsx";

function App() {
  const valueInCards = [
    {
      tier: "Free",
      price: 0,
      user: "Single User",
      storage: "5GB Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusReport: "Monthly Status Reports",
    },
    {
      tier: "Plus",
      price: 9,
      user: "5 User",
      storage: "50GB Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusReport: "Monthly Status Reports",
    },
    {
      tier: "Pro",
      price: 49,
      user: "Unlimited User",
      storage: "150GB Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusReport: "Monthly Status Reports",
    },
  ];
  return (
    <>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {valueInCards.map((item) => {
              return <CardData item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
