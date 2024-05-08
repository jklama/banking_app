import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Adrian", lastName: "Guese" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">Welcome, Adrian</header>

        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and Transactions efficiently"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.36}
        />
      </div>
    </section>
  );
};

export default Home;
