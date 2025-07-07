# SEO Setup Guide - Sitemap & Robots.txt

I've created both `sitemap.xml` and `robots.txt` files for your website! 🎉

## Files Created

✅ **`public/sitemap.xml`** - Complete sitemap with all 9 pages  
✅ **`public/robots.txt`** - Search engine instructions

## What You Need to Update

### 1. Replace Your Domain
In both files, replace `https://yourdomain.com` with your actual domain:

**In `sitemap.xml`:**
```xml
<loc>https://yourdomain.com/</loc>
```

**In `robots.txt`:**
```
Sitemap: https://yourdomain.com/sitemap.xml
```

### 2. Update Last Modified Dates
When you make significant changes to pages, update the `<lastmod>` dates in `sitemap.xml`:

```xml
<lastmod>2024-12-19</lastmod>  <!-- Update this date -->
```

## Pages Included in Sitemap

| Page | URL | Priority | Change Frequency |
|------|-----|----------|------------------|
| Home | `/` | 1.0 | Weekly |
| Design | `/design` | 0.9 | Monthly |
| Development | `/development` | 0.9 | Monthly |
| Custom AI | `/custom-ai` | 0.9 | Monthly |
| AI Automations | `/ai-automations` | 0.9 | Monthly |
| Production | `/production` | 0.9 | Monthly |
| Work | `/work` | 0.8 | Weekly |
| About | `/about` | 0.7 | Monthly |
| Contact | `/contact` | 0.6 | Monthly |

## Priority Explained
- **1.0** = Most important (Home page)
- **0.9** = Very important (Service pages)  
- **0.8** = Important (Portfolio/Work)
- **0.7** = Moderately important (About)
- **0.6** = Less important (Contact - good for UX, not SEO content)

## How It Helps SEO

1. **Search engines discover all your pages easily**
2. **Tells them how often to check for updates**
3. **Indicates which pages are most important**
4. **Improves indexing speed**

## Testing Your Files

Once deployed, you can access them at:
- `https://yourdomain.com/sitemap.xml`
- `https://yourdomain.com/robots.txt`

## Submit to Search Engines

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your property (website)
3. Go to "Sitemaps" in the left sidebar
4. Add: `sitemap.xml`
5. Submit

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Add your site
3. Submit your sitemap URL

## Maintenance

- **Update dates** when you make significant page changes
- **Add new pages** if you create additional routes
- **Check for broken links** periodically

Your site is now properly set up for search engine discovery! 🚀 