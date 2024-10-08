import React from 'react';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Transaction Dashboard</h1>
      </header>

      {/* Statistics Section */}
      <section>
        <h2>Statistics</h2>
        <Statistics />
      </section>

      {/* Transactions Table Section */}
      <section>
        <h2>Transactions Table</h2>
        <TransactionTable />
      </section>

      {/* Bar Chart Section */}
      <section>
        <h2>Price Range Distribution</h2>
        <BarChart />
      </section>

      {/* Pie Chart Section */}
      <section>
        <h2>Category Distribution</h2>
        <PieChart />
      </section>
    </div>
  );
}

export default App;
