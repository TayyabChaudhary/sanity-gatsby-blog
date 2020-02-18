export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4c100bff1b4ac29fc53cbc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-36akxt4k',
                  apiId: '3c7fab78-139e-4e97-969a-4b08cdc3f95e'
                },
                {
                  buildHookId: '5e4c100f3a1b1f5ae75592c2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vp8tjx28',
                  apiId: '4e8afb06-66b6-4463-bdea-2cea20969bf5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TayyabChaudhary/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vp8tjx28.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
