export default async ({ app, store }) => {
  await(
    app.$auth.loggedIn ? app.$auth.fetchUserOnce().catch((e) => { }) : null
  )

  if (app.$auth.user) {
    app.$authRefresh.initRefreshInterval()
  }
}