    <div class="sidebar h-screen absolute lg:relative bg-gray-900 transform -translate-x-full lg:translate-x-0 transition lg:transition-none duration-500 ease-in-out z-20 overflow-x-hidden" :class="{ expanded: expanded }">
        <div class="sidebar__header">
            <inertia-link class="flex items-center px-4" :href="route('dashboard')">
                <jet-application-mark class="block h-8 mr-2" />
                <span class="text-xl font-bold text-white">Digital Ecommerce</span>
            </inertia-link>
        </div>

        <ul class="overflow-y-auto">
            <sidebar-item :href="route('dashboard')" :active="route().current('dashboard')">
                <i class="ti-home text-xl mr-4"></i>
                <span>Dashboard</span>
            </sidebar-item>

            <h4 class="mb-2 mt-4 text-xs text-gray-300 uppercase tracking-wide px-6">
                Resources
            </h4>

            <!-- Product -->
            <sidebar-item :href="route('products.index')" :active="route().current('products.*')">
                <i class="ti-package text-xl mr-4"></i>
                <span>Products</span>
            </sidebar-item>

            <!-- Categories -->
            <sidebar-item :href="route('categories.index')" :active="route().current('categories.*')">
                <i class="ti-list text-xl mr-4"></i>
                <span>Categories</span>
            </sidebar-item>

            <!-- Tags -->
            <sidebar-item :href="route('tags.index')" :active="route().current('tags.*')">
                <i class="ti-tag text-xl mr-4"></i>
                <span>Tags</span>
            </sidebar-item>

            <!-- Colors -->
            <sidebar-item :href="route('colors.index')" :active="route().current('colors.*')">
                <i class="ti-view-grid text-xl mr-4"></i>
                <span>Colors</span>
            </sidebar-item>

            <!-- Vehicles -->
            <sidebar-item :href="route('vehicles.index')" :active="route().current('vehicles.*')">
                <i class="ti-car text-xl mr-4"></i>
                <span>Vehicles</span>
            </sidebar-item>

            <!-- Users -->
            <sidebar-item :href="route('users.index')" :active="route().current('users.*')">
                <i class="ti-user text-xl mr-4"></i>
                <span>Users</span>
            </sidebar-item>
            <!-- Customer -->
            <sidebar-item :href="route('customers.index')" :active="route().current('customers.*')">
                <i class="ti-user text-xl mr-4"></i>
                <span>Customers</span>
            </sidebar-item>

            <h4 class="mb-2 mt-4 text-xs text-gray-300 uppercase tracking-wide px-6">
                Earnings
            </h4>

            <!-- Orders -->
            <sidebar-item :href="route('orders.index')" :active="route().current('orders.*')">
                <i class="ti-shopping-cart text-xl mr-4"></i>
                <span>Orders</span>
            </sidebar-item>

            <h4 class="mb-2 mt-4 text-xs text-gray-300 uppercase tracking-wide px-6">
                Appearance
            </h4>

            <!--Home Page  -->
            <sidebar-item :href="route('appearance.home')" :active="route().current('appearance.home')">
                <i class="ti-ruler-pencil text-xl mr-4"></i>
                <span>Home Page</span>
            </sidebar-item>

            <!-- Design page -->
            <sidebar-item :href="route('appearance.designs')" :active="route().current('appearance.designs')">
                <i class="ti-palette text-xl mr-4"></i>
                <span>Design Page</span>
            </sidebar-item>

            <!--Custom order page  -->
            <sidebar-item :href="route('appearance.custom-orders')" :active="route().current('appearance.custom-orders')">
                <i class="ti-spray text-xl mr-4"></i>
                <span>Custom Page</span>
            </sidebar-item>
            <h4 class="mb-2 mt-4 text-xs text-gray-300 uppercase tracking-wide px-6">
                Configuration
            </h4>
            <!--Setting page  -->
            <sidebar-item :href="route('settings')" :active="route().current('settings')">
                <i class="ti-settings text-xl mr-4"></i>
                <span>Settings</span>
            </sidebar-item>
        </ul>
    </div>
