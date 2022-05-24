<template>
	<div>
		<div class="myProfile mb-4">
			<ul class="nav nav-tabs px-2">
				<li class="nav-item">
					<nuxt-link to="/profile" class="nav-link text-uppercase">Profile Settings</nuxt-link>
				</li>
				<li class="nav-item">
					<nuxt-link to="/profile/orders" class="nav-link text-uppercase">Purchase orders</nuxt-link>
				</li>
				<li class="nav-item">
					<nuxt-link to="/profile/designs" class="nav-link text-uppercase
          ">My designs</nuxt-link>
				</li>
				<li class="nav-item">
					<nuxt-link to="/profile/color-changes" class="
            nav-link text-uppercase 
          ">Color Changes</nuxt-link>
				</li>
				<li class="nav-item">
					<nuxt-link to="/profile/preview-designs" class="nav-link text-uppercase">Preview Designs</nuxt-link>
				</li>
				<li class="nav-item">
					<nuxt-link to="/profile/custom-orders" class="nav-link text-uppercase">Custom Orders</nuxt-link>
				</li>
				<li class="nav-item">
					<nuxt-link to="/profile/favourite" class="nav-link text-uppercase">My favorite</nuxt-link>
				</li>
			</ul>
		</div>

		<div class="my-3">
			<nuxt-child></nuxt-child>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nuxt-link-active {
	color: black !important;
}
.nuxt-link-exact-active {
	border-bottom: 3px solid var(--primary) !important;
	color: var(--primary) !important;
}

.nav-tabs {
	border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-item {
	margin-bottom: -1px;
}

.nav-link {
	border: none;
	padding: 16px;
	padding-bottom: 12px;
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 600;
}
</style>
