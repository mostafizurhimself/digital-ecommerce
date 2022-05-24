<template>
	<div class="overlay lg:hidden" v-if="expanded" @click="expanded = false"></div>
	<div class="flex">
		<sidebar :key="$page.url" :expanded="expanded"></sidebar>
		<div class="flex-grow overflow-x-hidden">
			<div class="min-h-screen bg-gray-100">
				<nav class="bg-white border-b border-gray-100" style="height: 64px">
					<!-- Primary Navigation Menu -->
					<div class="h-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
						<div class="text-2xl cursor-pointer block lg:hidden" @click="toggleSidebar">
							<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
								<path :class="{'hidden': expanded, 'inline-flex': ! expanded }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
								<path :class="{'hidden': ! expanded, 'inline-flex': expanded }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</div>
						<div class="flex items-center ml-auto">
							<div class="ml-3 relative">
								<!-- Teams Dropdown -->
								<jet-dropdown align="right" width="60" v-if="$page.props.jetstream.hasTeamFeatures">
									<template #trigger>
										<span class="inline-flex rounded-md">
											<button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition">
												{{ $page.props.user.current_team.name }}
												<svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
												</svg>
											</button>
										</span>
									</template>

									<template #content>
										<div class="w-60">
											<!-- Team Management -->
											<template v-if="$page.props.jetstream.hasTeamFeatures">
												<div class="block px-4 py-2 text-xs text-gray-400">Manage Team</div>

												<!-- Team Settings -->
												<jet-dropdown-link :href="route('teams.show', $page.props.user.current_team)">Team Settings</jet-dropdown-link>

												<jet-dropdown-link :href="route('teams.create')" v-if="$page.props.jetstream.canCreateTeams">Create New Team</jet-dropdown-link>

												<div class="border-t border-gray-100"></div>

												<!-- Team Switcher -->
												<div class="block px-4 py-2 text-xs text-gray-400">Switch Teams</div>

												<template v-for="team in $page.props.user.all_teams" :key="team.id">
													<form @submit.prevent="switchToTeam(team)">
														<jet-dropdown-link as="button">
															<div class="flex items-center">
																<svg v-if="team.id == $page.props.user.current_team_id" class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
																	<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
																</svg>
																<div>{{ team.name }}</div>
															</div>
														</jet-dropdown-link>
													</form>
												</template>
											</template>
										</div>
									</template>
								</jet-dropdown>
							</div>

							<!-- Settings Dropdown -->
							<div class="ml-3 relative">
								<jet-dropdown align="right" width="48">
									<template #trigger>
										<button v-if="$page.props.jetstream.managesProfilePhotos" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
											<img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />
										</button>

										<span v-else class="inline-flex rounded-md">
											<button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
												{{ $page.props.user.name }}
												<svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
												</svg>
											</button>
										</span>
									</template>

									<template #content>
										<!-- Account Management -->
										<div class="block px-4 py-2 text-xs text-gray-400">Manage Account</div>

										<jet-dropdown-link :href="route('profile.show')">Profile</jet-dropdown-link>

										<jet-dropdown-link :href="route('api-tokens.index')" v-if="$page.props.jetstream.hasApiFeatures">API Tokens</jet-dropdown-link>

										<div class="border-t border-gray-100"></div>

										<!-- Authentication -->
										<form @submit.prevent="logout">
											<jet-dropdown-link as="button">Log Out</jet-dropdown-link>
										</form>
									</template>
								</jet-dropdown>
							</div>
						</div>
					</div>
				</nav>

				<!-- Page Content -->
				<main class="px-4 sm:px-6 lg:px-8 py-5 overflow-y-auto w-full" style="height: calc(100vh - 64px);" scroll-region>
					<jet-banner />
					<slot></slot>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
import JetApplicationMark from "@/Jetstream/ApplicationMark";
import JetBanner from "@/Jetstream/Banner";
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownLink from "@/Jetstream/DropdownLink";
import JetNavLink from "@/Jetstream/NavLink";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink";
import Sidebar from "../Jetstream/Sidebar.vue";

export default {
	components: {
		JetApplicationMark,
		JetBanner,
		JetDropdown,
		JetDropdownLink,
		JetNavLink,
		JetResponsiveNavLink,
		Sidebar,
	},

	data() {
		return {
			expanded: false,
		};
	},

	methods: {
		switchToTeam(team) {
			this.$inertia.put(
				route("current-team.update"),
				{
					team_id: team.id,
				},
				{
					preserveState: false,
				}
			);
		},
		toggleSidebar() {
			this.expanded = !this.expanded;
		},

		logout() {
			this.$inertia.post(route("logout"));
		},
	},
};
</script>

<style lang="scss">
@import "vue-next-select/dist/index.css";

.tabs-component-tabs {
	@apply flex mb-4;
}

.tab-item {
	a {
		@apply px-4 py-2 mb-4 bg-gray-200 rounded-md mr-2;
	}
}

.tab-item.is-active {
	a {
		@apply bg-primary-500 text-white;
	}
}

.vue-select {
	width: 100%;
}
.vue-input {
	padding: 10px;
}
.vue-tag.selected {
	background-color: transparent;
}
</style>

