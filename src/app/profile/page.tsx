import Navbar from "../../../componets/navbar";
import ProfilePage from "../../../componets/profile-page";
import SideNav from "../../../componets/sidenav";
import CardProfile from "../../../componets/card-profile";

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-12 gap-4">
                {/* Sidebar: span 4 columns */}
                <div className="col-span-12 md:col-span-4">
                    <SideNav />
                </div>

                {/* Main content: Gallery and Cards stacked in the same column */}
                <div className="col-span-12 d-flex md:col-span-8 space-y-5">
                    <div className="col-span-6 md:col-span-8">
                        <CardProfile />
                    </div>

                    <div className="col-span-6 md:col-span-8">
                        <h1> Details setting card </h1>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
