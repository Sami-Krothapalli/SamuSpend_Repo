import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = {firstName: 'John', lastName: 'Doe', email:'johndoe@gmail.com'};
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
                
                RECENT TRANSACTIONS
            </div>
            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 540.50}, {currentBalance: 1200.00}]}
            />
        </section>
    )
}

export default Home;
