import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = {firstName: 'John', lastName: 'Doe'};
    return (
        <section className="home">
            <div className="home-content"> 
                <header className= "home-header">
                    <HeaderBox
                    type='greeting'
                    title='Welcome'
                    user={loggedIn?.firstName || 'Guest'}
                    subtext = "Access and Manage your banking needs with ease."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={4}
                        totalCurrentBalance={10204.56}


                    />
                </header>
            </div>
        </section>
    )
}

export default Home;
