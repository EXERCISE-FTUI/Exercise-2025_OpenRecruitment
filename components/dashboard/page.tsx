import NormalWidthDashboard from './normal_width_dashboard';
import SmallerWidthDashboard from './smaller_width_dashboard';


const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-50">

      <div className="hidden min-[1020px]:block">
        <NormalWidthDashboard />
      </div>


      <div className="block min-[1020px]:hidden">
        <SmallerWidthDashboard />
      </div>
    </div>
  );
};

export default Dashboard; 