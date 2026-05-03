import { RenderMode, ServerRoute } from '@angular/ssr';


export const serverRoutes: ServerRoute[] = [
  {
    path: 'course/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Example: fetch or generate all possible course IDs
      // Replace with real data source as needed
      const ids = ['career-launch', 'skill-boost', 'exam-mastery'];
      return ids.map(id => ({ id }));
    }
  },
  {
    path: 'plan/:courseId/:planId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Example: fetch or generate all possible courseId and planId pairs
      // Replace with real data source as needed
      const courseIds = ['career-launch', 'skill-boost', 'exam-mastery'];
      const planIds = ['basic', 'premium', 'pro'];
      const params = [];
      for (const courseId of courseIds) {
        for (const planId of planIds) {
          params.push({ courseId, planId });
        }
      }
      return params;
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
