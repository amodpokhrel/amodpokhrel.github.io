<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site images live in public/images (not lovable-assets): the GitHub Pages static build can't reach Lovable's asset storage.
- GitHub Pages deploy (.github/workflows/deploy-pages.yml) prerenders every route listed in vite.config.ts; add new routes and research slugs to that list.
- During static prerendering, React Query timers are unreferenced in src/router.tsx so the GitHub Pages build exits after writing every route.
