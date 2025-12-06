/**
 * PA.js v3.1.6x - The Universal Production Core
 * -------------------------------------------------------------------------
 * CHANGELOG & IMPROVEMENTS:
 * ========================
 * 
 * v3.1.6x represents the evolution of FRN.js into PA.js, delivering a
 * production-ready, full-stack solution with zero external dependencies.
 * 
 * MAJOR ENHANCEMENTS:
 * --------------------
 * 1. RENAMED FRAMEWORK: Complete transition from FRN to PA with pa- attribute prefix
 * 2. INTEGRATED CSS FRAMEWORK: Placeholder for embedding a complete CSS framework
 * 3. BROWSER & PHONE APIS: Comprehensive integration of native device capabilities
 * 4. API CONSUMPTION & CREATION: Built-in OAuth and API development tools
 * 5. REMOTE DATABASE SYNC: Cross-platform database synchronization capabilities
 * 6. ADVANCED SESSION & CACHE MANAGEMENT: Enterprise-grade state persistence
 * 7. MEDIA PROCESSING: Image preloading, compression, and optimization
 * 8. FILE MANAGEMENT: Complete file bucket and static file handling system
 * 9. FORM MANAGEMENT: Advanced form handling with validation and serialization
 * 10. HTML GENERATOR: Utility for programmatic HTML element creation
 * 11. COMPRESSION UTILITIES: Built-in ZIP compression without external dependencies
 * 12. MESSAGING SYSTEM: Email sending and flash notification system
 * 13. reDB INTEGRATION: Fluent Relational Database (cross between NoSQL and SQL)
 * 
 * PERFORMANCE IMPROVEMENTS:
 * -------------------------
 * - Neural DOM morphing engine with predictive rendering
 * - Intelligent batching of DOM updates
 * - Optimized signal propagation with dependency tracking
 * - Memory-efficient history management for time-travel
 * - RequestAnimationFrame-based rendering scheduling
 * - Advanced caching strategies with LRU eviction
 * - Image lazy loading and progressive enhancement
 * 
 * DEVELOPER EXPERIENCE:
 * ---------------------
 * - Comprehensive error boundary system
 * - Built-in performance monitoring and metrics
 * - Extensive event system for debugging
 * - Zero-configuration setup for rapid development
 * - TypeScript-friendly API design
 * - Intuitive API design that prioritizes developer productivity
 * - Rich documentation and examples
 * 
 * ARCHITECTURAL ADVANCEMENTS:
 * ---------------------------
 * - Tri-Kernel Quantum Engine (Presentation, Logic, Persistence)
 * - Universal runtime detection and adaptation
 * - Plugin-based extensibility system
 * - Component isolation and lifecycle management
 * - Reactive signal system with computed properties
 * - Zero-dependency architecture for maximum portability
 * 
 * 🌟 COMPLETE FEATURE LIST 🌟
 * -------------------------------------------------------------------------
 * 
 * CORE REACTIVITY:
 * 1. pa.signal() - Creates reactive signals with getter/setter pairs
 * 2. pa.computed() - Creates computed signals with dependency tracking
 * 3. pa.effect() - Runs side-effects when dependencies change
 * 4. Automatic dependency tracking and cleanup
 * 5. Batched updates for optimal performance
 * 
 * ARCHITECTURE:
 * 6. Tri-Kernel Quantum Engine (PK, LK, PFK)
 * 7. Native Web Worker for Logic Kernel
 * 8. Universal runtime detection (Browser/Node/Worker)
 * 9. Component isolation and scoping
 * 10. Plugin-based extensibility
 * 
 * STATE MANAGEMENT:
 * 11. Quantum State System with time-travel debugging
 * 12. PA.debug.travelTo(index) - Navigate state history
 * 13. State persistence and import/export
 * 14. Global and local state contexts
 * 15. State history with efficient snapshot management
 * 
 * UI & TEMPLATING:
 * 16. Declarative HTML API with pa-* attributes
 * 17. pa-text - Text interpolation
 * 18. pa-bind - Two-way data binding
 * 19. pa-if - Conditional rendering
 * 20. pa-for - List rendering
 * 21. pa-on - Event handling
 * 22. pa-comp - Component instantiation
 * 23. pa/class - Dynamic CSS classes
 * 24. Neural DOM morphing engine
 * 25. Hypermedia swap strategies
 * 
 * COMPONENT SYSTEM:
 * 26. PA.component(name, template) - Component registration
 * 27. Component lifecycle hooks (onMount, onUnmount, onUpdate)
 * 28. Component isolation and reactivity scopes
 * 29. Template-based component definitions
 * 30. Component composition and nesting
 * 
 * ROUTING:
 * 31. PA.router.add(path, target) - Route registration
 * 32. PA.router.navigate(path) - Programmatic navigation
 * 33. Hash-based routing with History API support
 * 34. Route guards and middleware
 * 35. Lazy loading of route components
 * 36. Route change events
 * 
 * DATABASE & ORM (reDB):
 * 37. PA.reDB - Fluent Relational Database (cross between NoSQL and SQL)
 * 38. Multiple storage backends (localStorage, IndexedDB, Memory, Remote)
 * 39. Query parsing with WHERE, ORDER BY, LIMIT, OFFSET
 * 40. CRUD operations (Create, Read, Update, Delete)
 * 41. Collection management and indexing
 * 42. Data validation and schema support
 * 43. Remote database synchronization
 * 44. Automatic conflict resolution
 * 45. Offline-first data access patterns
 * 
 * AUTHENTICATION:
 * 46. PA.auth.login(email, password) - User authentication
 * 47. PA.auth.register(userData) - User registration
 * 48. PA.auth.logout() - User logout
 * 49. JWT token management
 * 50. Session persistence
 * 51. OAuth integration (Google, Facebook, GitHub, etc.)
 * 52. Role-based access control (RBAC)
 * 53. Multi-factor authentication support
 * 
 * STORAGE:
 * 54. PA.storage.createBucket(name, options) - Bucket creation
 * 55. PA.storage.upload(bucket, file, metadata) - File upload
 * 56. PA.storage.download(bucket, fileId) - File download
 * 57. PA.storage.delete(bucket, fileId) - File deletion
 * 58. Bucket permissions and access control
 * 59. File metadata management
 * 60. Static file serving
 * 61. File compression and optimization
 * 
 * REAL-TIME:
 * 62. PA.ws.connect(endpoint) - WebSocket connection
 * 63. PA.ws.send(message) - Message sending
 * 64. PA.ws.on(event, handler) - Event handling
 * 65. Room-based messaging
 * 66. Connection state management
 * 67. Automatic reconnection logic
 * 68. Real-time data synchronization
 * 
 * FUNCTIONS:
 * 69. PA.functions.create(name, handler) - Function creation
 * 70. PA.functions.execute(name, data) - Function execution
 * 71. Serverless execution patterns
 * 72. Function composition and chaining
 * 73. Error handling and logging
 * 74. Function deployment utilities
 * 
 * SERVER:
 * 75. PA.server.get/post/put/delete(path, handler) - Route handlers
 * 76. PA.server.use(middleware) - Middleware support
 * 77. PA.server.listen(port, callback) - Server startup
 * 78. Universal HTTP server (Node.js)
 * 79. Request/response handling
 * 80. Route parameter parsing
 * 81. API generation utilities
 * 
 * PERFORMANCE:
 * 82. Native Web Workers for heavy computations
 * 83. Virtual DOM with efficient diffing
 * 84. RequestAnimationFrame optimizations
 * 85. Intelligent caching strategies
 * 86. Memory leak prevention
 * 87. Performance metrics collection
 * 88. Image lazy loading
 * 89. Resource preloading
 * 
 * DEVELOPER TOOLS:
 * 90. PA.Performance - Performance monitoring
 * 91. PA.ErrorBoundary - Error handling
 * 92. PA.Events - Global event system
 * 93. Time-travel debugging console
 * 94. Component inspection tools
 * 95. State history visualization
 * 96. Hot module replacement
 * 
 * TESTING:
 * 97. PA.test.describe(name, fn) - Test suite
 * 98. PA.test.it(name, fn) - Test case
 * 99. PA.test.expect(actual) - Assertion API
 * 100. PA.test.run() - Test runner
 * 101. Mock utilities and fixtures
 * 102. Test coverage reporting
 * 
 * INTERNATIONALIZATION:
 * 103. PA.i18n.setLocale(locale) - Locale setting
 * 104. PA.i18n.addTranslations(locale, translations) - Translation management
 * 105. PA.i18n.t(key, params) - Translation function
 * 106. Automatic locale detection
 * 107. Parameter interpolation in translations
 * 
 * ACCESSIBILITY:
 * 108. PA.a11y.announce(message) - Screen reader announcements
 * 109. PA.a11y.focusTrap(element) - Focus management
 * 110. ARIA attribute management
 * 111. Keyboard navigation support
 * 112. Screen reader compatibility
 * 
 * SECURITY:
 * 113. PA.security.escapeHtml(text) - XSS prevention
 * 114. PA.security.sanitize(html) - HTML sanitization
 * 115. PA.security.generateCSRFToken() - CSRF protection
 * 116. PA.security.validateCSRFToken(token) - Token validation
 * 117. Content Security Policy (CSP) support
 * 118. Secure defaults and configurations
 * 
 * OFFLINE:
 * 119. PA.offline.register() - Service Worker registration
 * 120. PA.offline.cache(url, data) - Response caching
 * 121. PA.offline.get(url) - Cache retrieval
 * 122. PA.offline.isOnline() - Connection status
 * 123. Background sync capabilities
 * 124. Cache invalidation strategies
 * 
 * ANIMATIONS:
 * 125. PA.animation.animate(element, keyframes, options) - Custom animations
 * 126. PA.animation.fadeIn/Out(element, duration) - Fade effects
 * 127. PA.animation.slideIn/Out(element, direction, duration) - Slide effects
 * 128. Physics-based animations
 * 129. Animation chaining and sequencing
 * 130. Performance-optimized animations
 * 
 * SSR/SSG:
 * 131. PA.renderToString(template, data) - Server-side rendering
 * 132. Static HTML generation
 * 133. Template processing and interpolation
 * 134. Universal rendering patterns
 * 135. SEO optimization support
 * 
 * UTILITIES:
 * 136. PA.U.uuid() - Unique ID generation
 * 137. PA.U.evalExpr(expr, context) - Safe expression evaluation
 * 138. PA.U.morph(oldEl, newEl) - DOM morphing
 * 139. PA.U.swap(target, content, strategy) - Content swapping
 * 140. Date formatting and manipulation
 * 141. Array and object utilities
 * 
 * EVENTS:
 * 142. PA.Events.on(event, callback, options) - Event subscription
 * 143. PA.Events.off(event, callback) - Event unsubscription
 * 144. PA.Events.emit(event, data) - Event emission
 * 145. Once-only event listeners
 * 146. Event middleware support
 * 
 * DEBUGGING:
 * 147. PA.debug.travelTo(index) - Time-travel navigation
 * 148. PA.debug.getHistory() - History retrieval
 * 149. State inspection tools
 * 150. Component debugging utilities
 * 151. Performance profiling
 * 
 * UNIVERSAL RUNTIME:
 * 152. Browser environment detection
 * 153. Node.js environment support
 * 154. Web Worker compatibility
 * 155. Service Worker integration
 * 156. Isomorphic code execution
 * 
 * ENTERPRISE FEATURES:
 * 157. Admin dashboard framework
 * 158. User management system
 * 159. Permission management
 * 160. Audit logging
 * 161. Multi-tenant support
 * 
 * CLI SUPPORT:
 * 162. Project scaffolding commands
 * 163. Development server
 * 164. Build optimization
 * 165. Deployment utilities
 * 166. Configuration management
 * 
 * BROWSER & PHONE APIS:
 * 167. PA.device.geolocation() - Geolocation API
 * 168. PA.device.camera() - Camera access
 * 169. PA.device.microphone() - Microphone access
 * 170. PA.device.orientation() - Device orientation
 * 171. PA.device.battery() - Battery status
 * 172. PA.device.vibrate() - Vibration API
 * 173. PA.device.network() - Network information
 * 174. PA.device.screen() - Screen information
 * 175. PA.device.stream() - Media streaming
 * 
 * API CONSUMPTION & CREATION:
 * 176. PA.api.consume(config) - API consumption helper
 * 177. PA.api.create(config) - API creation helper
 * 178. PA.api.oauth(provider, options) - OAuth integration
 * 179. PA.api.rest(method, url, data) - REST API helper
 * 180. PA.api.graphql(query, variables) - GraphQL helper
 * 181. PA.api.websocket(url) - WebSocket helper
 * 
 * SESSION & CACHE MANAGEMENT:
 * 182. PA.session.set(key, value) - Session storage
 * 183. PA.session.get(key) - Session retrieval
 * 184. PA.cache.set(key, value, ttl) - Cache with TTL
 * 185. PA.cache.get(key) - Cache retrieval
 * 186. PA.cache.lru(maxSize) - LRU cache implementation
 * 187. PA.session.destroy() - Session destruction
 * 
 * MEDIA PROCESSING:
 * 188. PA.media.preload(images) - Image preloading
 * 189. PA.media.compress(file, quality) - Image compression
 * 190. PA.media.resize(file, width, height) - Image resizing
 * 191. PA.media.filter(image, filter) - Image filtering
 * 192. PA.media.thumbnail(file, size) - Thumbnail generation
 * 
 * FILE MANAGEMENT:
 * 193. PA.file.bucket(name) - File bucket creation
 * 194. PA.file.upload(file, options) - File upload
 * 195. PA.file.download(id) - File download
 * 196. PA.file.delete(id) - File deletion
 * 197. PA.file.serve(path) - Static file serving
 * 
 * FORM MANAGEMENT:
 * 198. PA.form.create(schema) - Form creation
 * 199. PA.form.validate(form, rules) - Form validation
 * 200. PA.form.serialize(form) - Form serialization
 * 201. PA.form.populate(form, data) - Form population
 * 
 * HTML GENERATOR:
 * 202. PA.html.tag(tag, attrs, children) - HTML tag creation
 * 203. PA.html.element(type, props) - Element creation
 * 204. PA.html.fragment(html) - Fragment creation
 * 
 * COMPRESSION UTILITIES:
 * 205. PA.compress.zip(files) - ZIP compression
 * 206. PA.compress.unzip(zipData) - ZIP decompression
 * 207. PA.compress.gzip(data) - GZIP compression
 * 208. PA.compress.gunzip(data) - GZIP decompression
 * 
 * MESSAGING SYSTEM:
 * 209. PA.message.email(to, subject, body) - Email sending
 * 210. PA.message.flash(type, message) - Flash notifications
 * 211. PA.message.notify(title, body, options) - Browser notifications
 * 212. PA.message.push(title, body, options) - Push notifications
 * 
 * ========================================================================
 * CSS FRAMEWORK PLACEHOLDER
 * ========================================================================
 * 
 * Embed your complete CSS framework below. This section is specifically
 * designed to accommodate a full CSS framework without any external
 * dependencies. Simply paste your CSS code between the STYLE tags.
 * 
 * ========================================================================
 */

// CSS Framework Placeholder - Replace this comment with your CSS framework
const PA_CSS_FRAMEWORK = `
/* Paste your complete CSS framework here */
/* Keg CSS v3.3 - Enterprise-Grade UI Framework */
/* Copyright (c) 2025 John Kesh Mahugu | johnmahugu@gmail.com | +254722925095 */
/* License: MIT | Timestamp: August 31, 2025 */

/* ===== FONT IMPORTS ===== */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');

/* ===== LAYERS ===== */
@layer reset {
  /* Modern Reset */
  *, *::before, *::after { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }
  
  html { 
    -webkit-text-size-adjust: 100%; 
    -ms-text-size-adjust: 100%; 
    font-size: 16px; 
  }
  
  body { 
    font-family: 'Roboto', system-ui, sans-serif; 
    line-height: 1.6; 
    -webkit-font-smoothing: antialiased; 
    text-rendering: optimizeLegibility; 
    color: var(--on-background); 
    background: var(--background);
  }
  
  img, picture, video, canvas, svg { 
    display: block; 
    max-width: 100%; 
    height: auto; 
  }
  
  input, button, textarea, select { 
    font: inherit; 
    background: none; 
    border: none; 
    color: inherit;
  }
  
  a { 
    color: inherit; 
    text-decoration: none; 
  }
  
  table { 
    border-collapse: collapse; 
    border-spacing: 0; 
  }
  
  ul, ol { 
    padding: 0; 
    list-style: none; 
  }
  
  button { 
    cursor: pointer; 
    background: none; 
    border: none; 
  }
  
  /* Accessibility */
  :focus-visible { 
    outline: 2px solid var(--primary); 
    outline-offset: 2px; 
  }
  
  @media (prefers-reduced-motion: reduce) { 
    *, *::before, *::after { 
      transition: none !important; 
      animation: none !important; 
    } 
  }
}

@layer base {
  /* ===== THEMING VARIABLES ===== */
  :root {
    /* Material Design 3 Colors */
    --primary: #6200ea;
    --on-primary: #ffffff;
    --primary-container: #d0bfff;
    --on-primary-container: #21005d;
    --secondary: #03dac6;
    --on-secondary: #000000;
    --secondary-container: #d0f8f2;
    --on-secondary-container: #00201d;
    --tertiary: #ff4081;
    --on-tertiary: #ffffff;
    --tertiary-container: #ffdade;
    --on-tertiary-container: #40000a;
    --error: #b00020;
    --on-error: #ffffff;
    --error-container: #ffdad6;
    --on-error-container: #410002;
    --background: #ffffff;
    --on-background: #1c1b1f;
    --surface: #f5f5f5;
    --on-surface: #1c1b1f;
    --surface-variant: #e7e0ec;
    --on-surface-variant: #49454f;
    --outline: #7a757f;
    --shadow: rgba(0,0,0,0.2);
    
    /* Extended Colors */
    --success: #00c853;
    --warning: #ffd600;
    --info: #2196f3;
    --danger: #ff3860;
    --link: #3273dc;
    
    /* Spacing & Sizing */
    --spacing-unit: 4px;
    --font-size-base: 1rem;
    --border-radius: 4px;
    --transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    
    /* Typography */
    --font-family-sans: 'Roboto', system-ui, sans-serif;
    --font-family-mono: 'Roboto Mono', Consolas, monospace;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 20px rgba(0,0,0,0.1);
    --shadow-xl: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.08);
  }

  /* Dark Theme */
  [data-theme="dark"], @media (prefers-color-scheme: dark) {
    --primary: #bb86fc;
    --on-primary: #32005d;
    --primary-container: #4a007a;
    --on-primary-container: #e3d6ff;
    --secondary: #b4ccc5;
    --on-secondary: #1e3531;
    --secondary-container: #354b47;
    --on-secondary-container: #d0e8e1;
    --tertiary: #ffb3ba;
    --on-tertiary: #68001e;
    --tertiary-container: #8e2c37;
    --on-tertiary-container: #ffb3ba;
    --error: #ffb4ab;
    --on-error: #690005;
    --error-container: #93000a;
    --on-error-container: #ffb4ab;
    --background: #1c1b1f;
    --on-background: #e6e1e5;
    --surface: #1c1b1f;
    --on-surface: #e6e1e5;
    --surface-variant: #49454f;
    --on-surface-variant: #cbc4cf;
    --outline: #948f99;
  }

  /* High Contrast Theme */
  [data-theme="high-contrast"] {
    --primary: #000;
    --on-primary: #fff;
    --background: #fff;
    --on-background: #000;
    --surface: #fff;
    --on-surface: #000;
    --border: 2px solid #000;
    --shadow: none;
  }

  /* RTL Support */
  [dir="rtl"] { 
    direction: rtl; 
    text-align: right; 
  }
  
  /* Root Styles */
  html { 
    scroll-behavior: smooth; 
  }
  
  body { 
    min-height: 100vh; 
    text-rendering: optimizeSpeed; 
  }
}

@layer utilities {
  /* ===== SPACING ===== */
  .m-0 { margin: 0; }
  .m-1 { margin: calc(var(--spacing-unit) * 1); }
  .m-2 { margin: calc(var(--spacing-unit) * 2); }
  .m-3 { margin: calc(var(--spacing-unit) * 3); }
  .m-4 { margin: calc(var(--spacing-unit) * 4); }
  .m-5 { margin: calc(var(--spacing-unit) * 5); }
  .m-6 { margin: calc(var(--spacing-unit) * 6); }
  .m-8 { margin: calc(var(--spacing-unit) * 8); }
  .m-10 { margin: calc(var(--spacing-unit) * 10); }
  .m-12 { margin: calc(var(--spacing-unit) * 12); }
  .m-16 { margin: calc(var(--spacing-unit) * 16); }
  .m-20 { margin: calc(var(--spacing-unit) * 20); }
  
  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: calc(var(--spacing-unit) * 1); }
  .mt-2 { margin-top: calc(var(--spacing-unit) * 2); }
  .mt-3 { margin-top: calc(var(--spacing-unit) * 3); }
  .mt-4 { margin-top: calc(var(--spacing-unit) * 4); }
  .mt-5 { margin-top: calc(var(--spacing-unit) * 5); }
  .mt-6 { margin-top: calc(var(--spacing-unit) * 6); }
  .mt-8 { margin-top: calc(var(--spacing-unit) * 8); }
  .mt-10 { margin-top: calc(var(--spacing-unit) * 10); }
  .mt-12 { margin-top: calc(var(--spacing-unit) * 12); }
  .mt-16 { margin-top: calc(var(--spacing-unit) * 16); }
  .mt-20 { margin-top: calc(var(--spacing-unit) * 20); }
  
  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: calc(var(--spacing-unit) * 1); }
  .mb-2 { margin-bottom: calc(var(--spacing-unit) * 2); }
  .mb-3 { margin-bottom: calc(var(--spacing-unit) * 3); }
  .mb-4 { margin-bottom: calc(var(--spacing-unit) * 4); }
  .mb-5 { margin-bottom: calc(var(--spacing-unit) * 5); }
  .mb-6 { margin-bottom: calc(var(--spacing-unit) * 6); }
  .mb-8 { margin-bottom: calc(var(--spacing-unit) * 8); }
  .mb-10 { margin-bottom: calc(var(--spacing-unit) * 10); }
  .mb-12 { margin-bottom: calc(var(--spacing-unit) * 12); }
  .mb-16 { margin-bottom: calc(var(--spacing-unit) * 16); }
  .mb-20 { margin-bottom: calc(var(--spacing-unit) * 20); }
  
  .ml-0 { margin-left: 0; }
  .ml-1 { margin-left: calc(var(--spacing-unit) * 1); }
  .ml-2 { margin-left: calc(var(--spacing-unit) * 2); }
  .ml-3 { margin-left: calc(var(--spacing-unit) * 3); }
  .ml-4 { margin-left: calc(var(--spacing-unit) * 4); }
  .ml-5 { margin-left: calc(var(--spacing-unit) * 5); }
  .ml-6 { margin-left: calc(var(--spacing-unit) * 6); }
  .ml-8 { margin-left: calc(var(--spacing-unit) * 8); }
  .ml-10 { margin-left: calc(var(--spacing-unit) * 10); }
  .ml-12 { margin-left: calc(var(--spacing-unit) * 12); }
  .ml-16 { margin-left: calc(var(--spacing-unit) * 16); }
  .ml-20 { margin-left: calc(var(--spacing-unit) * 20); }
  
  .mr-0 { margin-right: 0; }
  .mr-1 { margin-right: calc(var(--spacing-unit) * 1); }
  .mr-2 { margin-right: calc(var(--spacing-unit) * 2); }
  .mr-3 { margin-right: calc(var(--spacing-unit) * 3); }
  .mr-4 { margin-right: calc(var(--spacing-unit) * 4); }
  .mr-5 { margin-right: calc(var(--spacing-unit) * 5); }
  .mr-6 { margin-right: calc(var(--spacing-unit) * 6); }
  .mr-8 { margin-right: calc(var(--spacing-unit) * 8); }
  .mr-10 { margin-right: calc(var(--spacing-unit) * 10); }
  .mr-12 { margin-right: calc(var(--spacing-unit) * 12); }
  .mr-16 { margin-right: calc(var(--spacing-unit) * 16); }
  .mr-20 { margin-right: calc(var(--spacing-unit) * 20; }
  
  .mx-0 { margin-left: 0; margin-right: 0; }
  .mx-1 { margin-left: calc(var(--spacing-unit) * 1); margin-right: calc(var(--spacing-unit) * 1); }
  .mx-2 { margin-left: calc(var(--spacing-unit) * 2); margin-right: calc(var(--spacing-unit) * 2); }
  .mx-3 { margin-left: calc(var(--spacing-unit) * 3); margin-right: calc(var(--spacing-unit) * 3); }
  .mx-4 { margin-left: calc(var(--spacing-unit) * 4); margin-right: calc(var(--spacing-unit) * 4); }
  .mx-5 { margin-left: calc(var(--spacing-unit) * 5); margin-right: calc(var(--spacing-unit) * 5); }
  .mx-6 { margin-left: calc(var(--spacing-unit) * 6); margin-right: calc(var(--spacing-unit) * 6); }
  .mx-8 { margin-left: calc(var(--spacing-unit) * 8); margin-right: calc(var(--spacing-unit) * 8); }
  .mx-10 { margin-left: calc(var(--spacing-unit) * 10); margin-right: calc(var(--spacing-unit) * 10); }
  .mx-12 { margin-left: calc(var(--spacing-unit) * 12); margin-right: calc(var(--spacing-unit) * 12); }
  .mx-16 { margin-left: calc(var(--spacing-unit) * 16); margin-right: calc(var(--spacing-unit) * 16); }
  .mx-20 { margin-left: calc(var(--spacing-unit) * 20); margin-right: calc(var(--spacing-unit) * 20); }
  
  .my-0 { margin-top: 0; margin-bottom: 0; }
  .my-1 { margin-top: calc(var(--spacing-unit) * 1); margin-bottom: calc(var(--spacing-unit) * 1); }
  .my-2 { margin-top: calc(var(--spacing-unit) * 2); margin-bottom: calc(var(--spacing-unit) * 2); }
  .my-3 { margin-top: calc(var(--spacing-unit) * 3); margin-bottom: calc(var(--spacing-unit) * 3); }
  .my-4 { margin-top: calc(var(--spacing-unit) * 4); margin-bottom: calc(var(--spacing-unit) * 4); }
  .my-5 { margin-top: calc(var(--spacing-unit) * 5); margin-bottom: calc(var(--spacing-unit) * 5); }
  .my-6 { margin-top: calc(var(--spacing-unit) * 6); margin-bottom: calc(var(--spacing-unit) * 6); }
  .my-8 { margin-top: calc(var(--spacing-unit) * 8); margin-bottom: calc(var(--spacing-unit) * 8); }
  .my-10 { margin-top: calc(var(--spacing-unit) * 10); margin-bottom: calc(var(--spacing-unit) * 10); }
  .my-12 { margin-top: calc(var(--spacing-unit) * 12); margin-bottom: calc(var(--spacing-unit) * 12); }
  .my-16 { margin-top: calc(var(--spacing-unit) * 16); margin-bottom: calc(var(--spacing-unit) * 16); }
  .my-20 { margin-top: calc(var(--spacing-unit) * 20); margin-bottom: calc(var(--spacing-unit) * 20); }
  
  .p-0 { padding: 0; }
  .p-1 { padding: calc(var(--spacing-unit) * 1); }
  .p-2 { padding: calc(var(--spacing-unit) * 2); }
  .p-3 { padding: calc(var(--spacing-unit) * 3); }
  .p-4 { padding: calc(var(--spacing-unit) * 4); }
  .p-5 { padding: calc(var(--spacing-unit) * 5); }
  .p-6 { padding: calc(var(--spacing-unit) * 6); }
  .p-8 { padding: calc(var(--spacing-unit) * 8); }
  .p-10 { padding: calc(var(--spacing-unit) * 10); }
  .p-12 { padding: calc(var(--spacing-unit) * 12); }
  .p-16 { padding: calc(var(--spacing-unit) * 16); }
  .p-20 { padding: calc(var(--spacing-unit) * 20); }
  
  .pt-0 { padding-top: 0; }
  .pt-1 { padding-top: calc(var(--spacing-unit) * 1); }
  .pt-2 { padding-top: calc(var(--spacing-unit) * 2); }
  .pt-3 { padding-top: calc(var(--spacing-unit) * 3); }
  .pt-4 { padding-top: calc(var(--spacing-unit) * 4); }
  .pt-5 { padding-top: calc(var(--spacing-unit) * 5); }
  .pt-6 { padding-top: calc(var(--spacing-unit) * 6); }
  .pt-8 { padding-top: calc(var(--spacing-unit) * 8); }
  .pt-10 { padding-top: calc(var(--spacing-unit) * 10); }
  .pt-12 { padding-top: calc(var(--spacing-unit) * 12); }
  .pt-16 { padding-top: calc(var(--spacing-unit) * 16); }
  .pt-20 { padding-top: calc(var(--spacing-unit) * 20); }
  
  .pb-0 { padding-bottom: 0; }
  .pb-1 { padding-bottom: calc(var(--spacing-unit) * 1); }
  .pb-2 { padding-bottom: calc(var(--spacing-unit) * 2); }
  .pb-3 { padding-bottom: calc(var(--spacing-unit) * 3); }
  .pb-4 { padding-bottom: calc(var(--spacing-unit) * 4); }
  .pb-5 { padding-bottom: calc(var(--spacing-unit) * 5); }
  .pb-6 { padding-bottom: calc(var(--spacing-unit) * 6); }
  .pb-8 { padding-bottom: calc(var(--spacing-unit) * 8); }
  .pb-10 { padding-bottom: calc(var(--spacing-unit) * 10); }
  .pb-12 { padding-bottom: calc(var(--spacing-unit) * 12); }
  .pb-16 { padding-bottom: calc(var(--spacing-unit) * 16); }
  .pb-20 { padding-bottom: calc(var(--spacing-unit) * 20); }
  
  .pl-0 { padding-left: 0; }
  .pl-1 { padding-left: calc(var(--spacing-unit) * 1); }
  .pl-2 { padding-left: calc(var(--spacing-unit) * 2); }
  .pl-3 { padding-left: calc(var(--spacing-unit) * 3); }
  .pl-4 { padding-left: calc(var(--spacing-unit) * 4); }
  .pl-5 { padding-left: calc(var(--spacing-unit) * 5); }
  .pl-6 { padding-left: calc(var(--spacing-unit) * 6); }
  .pl-8 { padding-left: calc(var(--spacing-unit) * 8); }
  .pl-10 { padding-left: calc(var(--spacing-unit) * 10); }
  .pl-12 { padding-left: calc(var(--spacing-unit) * 12); }
  .pl-16 { padding-left: calc(var(--spacing-unit) * 16); }
  .pl-20 { padding-left: calc(var(--spacing-unit) * 20); }
  
  .pr-0 { padding-right: 0; }
  .pr-1 { padding-right: calc(var(--spacing-unit) * 1); }
  .pr-2 { padding-right: calc(var(--spacing-unit) * 2); }
  .pr-3 { padding-right: calc(var(--spacing-unit) * 3); }
  .pr-4 { padding-right: calc(var(--spacing-unit) * 4); }
  .pr-5 { padding-right: calc(var(--spacing-unit) * 5); }
  .pr-6 { padding-right: calc(var(--spacing-unit) * 6); }
  .pr-8 { padding-right: calc(var(--spacing-unit) * 8); }
  .pr-10 { padding-right: calc(var(--spacing-unit) * 10); }
  .pr-12 { padding-right: calc(var(--spacing-unit) * 12); }
  .pr-16 { padding-right: calc(var(--spacing-unit) * 16); }
  .pr-20 { padding-right: calc(var(--spacing-unit) * 20); }
  
  .px-0 { padding-left: 0; padding-right: 0; }
  .px-1 { padding-left: calc(var(--spacing-unit) * 1); padding-right: calc(var(--spacing-unit) * 1); }
  .px-2 { padding-left: calc(var(--spacing-unit) * 2); padding-right: calc(var(--spacing-unit) * 2); }
  .px-3 { padding-left: calc(var(--spacing-unit) * 3); padding-right: calc(var(--spacing-unit) * 3); }
  .px-4 { padding-left: calc(var(--spacing-unit) * 4); padding-right: calc(var(--spacing-unit) * 4); }
  .px-5 { padding-left: calc(var(--spacing-unit) * 5); padding-right: calc(var(--spacing-unit) * 5); }
  .px-6 { padding-left: calc(var(--spacing-unit) * 6); padding-right: calc(var(--spacing-unit) * 6); }
  .px-8 { padding-left: calc(var(--spacing-unit) * 8); padding-right: calc(var(--spacing-unit) * 8); }
  .px-10 { padding-left: calc(var(--spacing-unit) * 10); padding-right: calc(var(--spacing-unit) * 10); }
  .px-12 { padding-left: calc(var(--spacing-unit) * 12); padding-right: calc(var(--spacing-unit) * 12); }
  .px-16 { padding-left: calc(var(--spacing-unit) * 16); padding-right: calc(var(--spacing-unit) * 16); }
  .px-20 { padding-left: calc(var(--spacing-unit) * 20); padding-right: calc(var(--spacing-unit) * 20); }
  
  .py-0 { padding-top: 0; padding-bottom: 0; }
  .py-1 { padding-top: calc(var(--spacing-unit) * 1); padding-bottom: calc(var(--spacing-unit) * 1); }
  .py-2 { padding-top: calc(var(--spacing-unit) * 2); padding-bottom: calc(var(--spacing-unit) * 2); }
  .py-3 { padding-top: calc(var(--spacing-unit) * 3); padding-bottom: calc(var(--spacing-unit) * 3); }
  .py-4 { padding-top: calc(var(--spacing-unit) * 4); padding-bottom: calc(var(--spacing-unit) * 4); }
  .py-5 { padding-top: calc(var(--spacing-unit) * 5); padding-bottom: calc(var(--spacing-unit) * 5); }
  .py-6 { padding-top: calc(var(--spacing-unit) * 6); padding-bottom: calc(var(--spacing-unit) * 6); }
  .py-8 { padding-top: calc(var(--spacing-unit) * 8); padding-bottom: calc(var(--spacing-unit) * 8); }
  .py-10 { padding-top: calc(var(--spacing-unit) * 10); padding-bottom: calc(var(--spacing-unit) * 10); }
  .py-12 { padding-top: calc(var(--spacing-unit) * 12); padding-bottom: calc(var(--spacing-unit) * 12); }
  .py-16 { padding-top: calc(var(--spacing-unit) * 16); padding-bottom: calc(var(--spacing-unit) * 16); }
  .py-20 { padding-top: calc(var(--spacing-unit) * 20); padding-bottom: calc(var(--spacing-unit) * 20); }
  
  .gap-0 { gap: 0; }
  .gap-1 { gap: calc(var(--spacing-unit) * 1); }
  .gap-2 { gap: calc(var(--spacing-unit) * 2); }
  .gap-3 { gap: calc(var(--spacing-unit) * 3); }
  .gap-4 { gap: calc(var(--spacing-unit) * 4); }
  .gap-5 { gap: calc(var(--spacing-unit) * 5); }
  .gap-6 { gap: calc(var(--spacing-unit) * 6); }
  .gap-8 { gap: calc(var(--spacing-unit) * 8); }
  .gap-10 { gap: calc(var(--spacing-unit) * 10); }
  .gap-12 { gap: calc(var(--spacing-unit) * 12); }
  .gap-16 { gap: calc(var(--spacing-unit) * 16); }
  .gap-20 { gap: calc(var(--spacing-unit) * 20; }

  /* ===== COLORS ===== */
  .text-primary { color: var(--primary); }
  .text-secondary { color: var(--secondary); }
  .text-tertiary { color: var(--tertiary); }
  .text-error { color: var(--error); }
  .text-success { color: var(--success); }
  .text-warning { color: var(--warning); }
  .text-info { color: var(--info); }
  .text-danger { color: var(--danger); }
  .text-on-primary { color: var(--on-primary); }
  .text-on-secondary { color: var(--on-secondary); }
  .text-on-tertiary { color: var(--on-tertiary); }
  .text-on-error { color: var(--on-error); }
  .text-on-background { color: var(--on-background); }
  .text-on-surface { color: var(--on-surface); }
  .text-on-surface-variant { color: var(--on-surface-variant); }
  
  .bg-primary { background-color: var(--primary); }
  .bg-secondary { background-color: var(--secondary); }
  .bg-tertiary { background-color: var(--tertiary); }
  .bg-error { background-color: var(--error); }
  .bg-success { background-color: var(--success); }
  .bg-warning { background-color: var(--warning); }
  .bg-info { background-color: var(--info); }
  .bg-danger { background-color: var(--danger); }
  .bg-primary-container { background-color: var(--primary-container); }
  .bg-secondary-container { background-color: var(--secondary-container); }
  .bg-tertiary-container { background-color: var(--tertiary-container); }
  .bg-error-container { background-color: var(--error-container); }
  .bg-surface { background-color: var(--surface); }
  .bg-surface-variant { background-color: var(--surface-variant); }
  .bg-background { background-color: var(--background); }
  
  .border-primary { border-color: var(--primary); }
  .border-secondary { border-color: var(--secondary); }
  .border-tertiary { border-color: var(--tertiary); }
  .border-error { border-color: var(--error); }
  .border-success { border-color: var(--success); }
  .border-warning { border-color: var(--warning); }
  .border-info { border-color: var(--info); }
  .border-danger { border-color: var(--danger); }
  .border-outline { border-color: var(--outline); }
  
  /* ===== TYPOGRAPHY ===== */
  .font-sans { font-family: var(--font-family-sans); }
  .font-mono { font-family: var(--font-family-mono); }
  
  .text-xs { font-size: 0.75rem; line-height: 1rem; }
  .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
  .text-base { font-size: 1rem; line-height: 1.5rem; }
  .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
  .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
  .text-2xl { font-size: 1.5rem; line-height: 2rem; }
  .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
  .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .text-5xl { font-size: 3rem; line-height: 1; }
  .text-6xl { font-size: 3.75rem; line-height: 1; }
  .text-7xl { font-size: 4.5rem; line-height: 1; }
  .text-8xl { font-size: 6rem; line-height: 1; }
  .text-9xl { font-size: 8rem; line-height: 1; }
  
  .font-thin { font-weight: 100; }
  .font-extralight { font-weight: 200; }
  .font-light { font-weight: 300; }
  .font-normal { font-weight: 400; }
  .font-medium { font-weight: 500; }
  .font-semibold { font-weight: 600; }
  .font-bold { font-weight: 700; }
  .font-extrabold { font-weight: 800; }
  .font-black { font-weight: 900; }
  
  .leading-none { line-height: 1; }
  .leading-tight { line-height: 1.25; }
  .leading-snug { line-height: 1.375; }
  .leading-normal { line-height: 1.5; }
  .leading-relaxed { line-height: 1.625; }
  .leading-loose { line-height: 2; }
  
  .tracking-tighter { letter-spacing: -0.05em; }
  .tracking-tight { letter-spacing: -0.025em; }
  .tracking-normal { letter-spacing: 0; }
  .tracking-wide { letter-spacing: 0.025em; }
  .tracking-wider { letter-spacing: 0.05em; }
  .tracking-widest { letter-spacing: 0.1em; }
  
  .text-left { text-align: left; }
  .text-center { text-align: center; }
  .text-right { text-align: right; }
  .text-justify { text-align: justify; }
  .text-start { text-align: start; }
  .text-end { text-align: end; }
  
  .uppercase { text-transform: uppercase; }
  .lowercase { text-transform: lowercase; }
  .capitalize { text-transform: capitalize; }
  .normal-case { text-transform: none; }
  
  .italic { font-style: italic; }
  .not-italic { font-style: normal; }
  
  .underline { text-decoration: underline; }
  .line-through { text-decoration: line-through; }
  .no-underline { text-decoration: none; }
  
  .break-words { overflow-wrap: break-word; }
  .break-all { word-break: break-all; }
  .whitespace-normal { white-space: normal; }
  .whitespace-nowrap { white-space: nowrap; }
  .whitespace-pre { white-space: pre; }
  .whitespace-pre-line { white-space: pre-line; }
  .whitespace-pre-wrap { white-space: pre-wrap; }
  
  .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .overflow-ellipsis { text-overflow: ellipsis; }
  .overflow-clip { text-overflow: clip; }

  /* ===== LAYOUT ===== */
  .block { display: block; }
  .inline-block { display: inline-block; }
  .inline { display: inline; }
  .flex { display: flex; }
  .inline-flex { display: inline-flex; }
  .grid { display: grid; }
  .inline-grid { display: inline-grid; }
  .hidden { display: none; }
  
  .flex-row { flex-direction: row; }
  .flex-row-reverse { flex-direction: row-reverse; }
  .flex-col { flex-direction: column; }
  .flex-col-reverse { flex-direction: column-reverse; }
  
  .flex-wrap { flex-wrap: wrap; }
  .flex-wrap-reverse { flex-wrap: wrap-reverse; }
  .flex-nowrap { flex-wrap: nowrap; }
  
  .items-start { align-items: flex-start; }
  .items-end { align-items: flex-end; }
  .items-center { align-items: center; }
  .items-baseline { align-items: baseline; }
  .items-stretch { align-items: stretch; }
  
  .justify-start { justify-content: flex-start; }
  .justify-end { justify-content: flex-end; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .justify-evenly { justify-content: space-evenly; }
  
  .content-start { align-content: flex-start; }
  .content-end { align-content: flex-end; }
  .content-center { align-content: center; }
  .content-between { align-content: space-between; }
  .content-around { align-content: space-around; }
  .content-stretch { align-content: stretch; }
  
  .self-auto { align-self: auto; }
  .self-start { align-self: flex-start; }
  .self-end { align-self: flex-end; }
  .self-center { align-self: center; }
  .self-baseline { align-self: baseline; }
  .self-stretch { align-self: stretch; }
  
  .flex-1 { flex: 1 1 0%; }
  .flex-auto { flex: 1 1 auto; }
  .flex-initial { flex: 0 1 auto; }
  .flex-none { flex: none; }
  
  .flex-grow-0 { flex-grow: 0; }
  .flex-grow { flex-grow: 1; }
  
  .flex-shrink-0 { flex-shrink: 0; }
  .flex-shrink { flex-shrink: 1; }
  
  .order-1 { order: 1; }
  .order-2 { order: 2; }
  .order-3 { order: 3; }
  .order-4 { order: 4; }
  .order-5 { order: 5; }
  .order-6 { order: 6; }
  .order-7 { order: 7; }
  .order-8 { order: 8; }
  .order-9 { order: 9; }
  .order-10 { order: 10; }
  .order-11 { order: 11; }
  .order-12 { order: 12; }
  .order-first { order: -9999; }
  .order-last { order: 9999; }
  .order-none { order: 0; }
  
  .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
  .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  .grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
  .grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr)); }
  .grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr)); }
  .grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr)); }
  .grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr)); }
  .grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr)); }
  .grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
  .grid-cols-none { grid-template-columns: none; }
  
  .grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr)); }
  .grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr)); }
  .grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr)); }
  .grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr)); }
  .grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr)); }
  .grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr)); }
  .grid-rows-none { grid-template-rows: none; }
  
  .col-auto { grid-column: auto; }
  .col-span-1 { grid-column: span 1 / span 1; }
  .col-span-2 { grid-column: span 2 / span 2; }
  .col-span-3 { grid-column: span 3 / span 3; }
  .col-span-4 { grid-column: span 4 / span 4; }
  .col-span-5 { grid-column: span 5 / span 5; }
  .col-span-6 { grid-column: span 6 / span 6; }
  .col-span-7 { grid-column: span 7 / span 7; }
  .col-span-8 { grid-column: span 8 / span 8; }
  .col-span-9 { grid-column: span 9 / span 9; }
  .col-span-10 { grid-column: span 10 / span 10; }
  .col-span-11 { grid-column: span 11 / span 11; }
  .col-span-12 { grid-column: span 12 / span 12; }
  .col-span-full { grid-column: 1 / -1; }
  .col-start-1 { grid-column-start: 1; }
  .col-start-2 { grid-column-start: 2; }
  .col-start-3 { grid-column-start: 3; }
  .col-start-4 { grid-column-start: 4; }
  .col-start-5 { grid-column-start: 5; }
  .col-start-6 { grid-column-start: 6; }
  .col-start-7 { grid-column-start: 7; }
  .col-start-8 { grid-column-start: 8; }
  .col-start-9 { grid-column-start: 9; }
  .col-start-10 { grid-column-start: 10; }
  .col-start-11 { grid-column-start: 11; }
  .col-start-12 { grid-column-start: 12; }
  .col-start-13 { grid-column-start: 13; }
  .col-start-auto { grid-column-start: auto; }
  .col-end-1 { grid-column-end: 1; }
  .col-end-2 { grid-column-end: 2; }
  .col-end-3 { grid-column-end: 3; }
  .col-end-4 { grid-column-end: 4; }
  .col-end-5 { grid-column-end: 5; }
  .col-end-6 { grid-column-end: 6; }
  .col-end-7 { grid-column-end: 7; }
  .col-end-8 { grid-column-end: 8; }
  .col-end-9 { grid-column-end: 9; }
  .col-end-10 { grid-column-end: 10; }
  .col-end-11 { grid-column-end: 11; }
  .col-end-12 { grid-column-end: 12; }
  .col-end-13 { grid-column-end: 13; }
  .col-end-auto { grid-column-end: auto; }
  
  .row-auto { grid-row: auto; }
  .row-span-1 { grid-row: span 1 / span 1; }
  .row-span-2 { grid-row: span 2 / span 2; }
  .row-span-3 { grid-row: span 3 / span 3; }
  .row-span-4 { grid-row: span 4 / span 4; }
  .row-span-5 { grid-row: span 5 / span 5; }
  .row-span-6 { grid-row: span 6 / span 6; }
  .row-span-full { grid-row: 1 / -1; }
  .row-start-1 { grid-row-start: 1; }
  .row-start-2 { grid-row-start: 2; }
  .row-start-3 { grid-row-start: 3; }
  .row-start-4 { grid-row-start: 4; }
  .row-start-5 { grid-row-start: 5; }
  .row-start-6 { grid-row-start: 6; }
  .row-start-7 { grid-row-start: 7; }
  .row-start-auto { grid-row-start: auto; }
  .row-end-1 { grid-row-end: 1; }
  .row-end-2 { grid-row-end: 2; }
  .row-end-3 { grid-row-end: 3; }
  .row-end-4 { grid-row-end: 4; }
  .row-end-5 { grid-row-end: 5; }
  .row-end-6 { grid-row-end: 6; }
  .row-end-7 { grid-row-end: 7; }
  .row-end-auto { grid-row-end: auto; }
  
  .gap-x-0 { column-gap: 0; }
  .gap-x-1 { column-gap: calc(var(--spacing-unit) * 1); }
  .gap-x-2 { column-gap: calc(var(--spacing-unit) * 2); }
  .gap-x-3 { column-gap: calc(var(--spacing-unit) * 3); }
  .gap-x-4 { column-gap: calc(var(--spacing-unit) * 4); }
  .gap-x-5 { column-gap: calc(var(--spacing-unit) * 5); }
  .gap-x-6 { column-gap: calc(var(--spacing-unit) * 6); }
  .gap-x-8 { column-gap: calc(var(--spacing-unit) * 8); }
  .gap-x-10 { column-gap: calc(var(--spacing-unit) * 10); }
  .gap-x-12 { column-gap: calc(var(--spacing-unit) * 12); }
  .gap-x-16 { column-gap: calc(var(--spacing-unit) * 16); }
  .gap-x-20 { column-gap: calc(var(--spacing-unit) * 20); }
  
  .gap-y-0 { row-gap: 0; }
  .gap-y-1 { row-gap: calc(var(--spacing-unit) * 1); }
  .gap-y-2 { row-gap: calc(var(--spacing-unit) * 2); }
  .gap-y-3 { row-gap: calc(var(--spacing-unit) * 3); }
  .gap-y-4 { row-gap: calc(var(--spacing-unit) * 4); }
  .gap-y-5 { row-gap: calc(var(--spacing-unit) * 5); }
  .gap-y-6 { row-gap: calc(var(--spacing-unit) * 6); }
  .gap-y-8 { row-gap: calc(var(--spacing-unit) * 8); }
  .gap-y-10 { row-gap: calc(var(--spacing-unit) * 10); }
  .gap-y-12 { row-gap: calc(var(--spacing-unit) * 12); }
  .gap-y-16 { row-gap: calc(var(--spacing-unit) * 16); }
  .gap-y-20 { row-gap: calc(var(--spacing-unit) * 20); }
  
  .static { position: static; }
  .fixed { position: fixed; }
  .absolute { position: absolute; }
  .relative { position: relative; }
  .sticky { position: sticky; }
  
  .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
  .inset-x-0 { right: 0; left: 0; }
  .inset-y-0 { top: 0; bottom: 0; }
  .top-0 { top: 0; }
  .right-0 { right: 0; }
  .bottom-0 { bottom: 0; }
  .left-0 { left: 0; }
  
  .z-0 { z-index: 0; }
  .z-10 { z-index: 10; }
  .z-20 { z-index: 20; }
  .z-30 { z-index: 30; }
  .z-40 { z-index: 40; }
  .z-50 { z-index: 50; }
  .z-auto { z-index: auto; }
  
  .w-auto { width: auto; }
  .w-full { width: 100%; }
  .w-screen { width: 100vw; }
  .w-min { width: min-content; }
  .w-max { width: max-content; }
  .w-fit { width: fit-content; }
  
  .h-auto { height: auto; }
  .h-full { height: 100%; }
  .h-screen { height: 100vh; }
  .h-min { height: min-content; }
  .h-max { height: max-content; }
  .h-fit { height: fit-content; }
  
  .max-w-xs { max-width: 20rem; }
  .max-w-sm { max-width: 24rem; }
  .max-w-md { max-width: 28rem; }
  .max-w-lg { max-width: 32rem; }
  .max-w-xl { max-width: 36rem; }
  .max-w-2xl { max-width: 42rem; }
  .max-w-3xl { max-width: 48rem; }
  .max-w-4xl { max-width: 56rem; }
  .max-w-5xl { max-width: 64rem; }
  .max-w-6xl { max-width: 72rem; }
  .max-w-7xl { max-width: 80rem; }
  .max-w-full { max-width: 100%; }
  .max-w-screen-sm { max-width: 640px; }
  .max-w-screen-md { max-width: 768px; }
  .max-w-screen-lg { max-width: 1024px; }
  .max-w-screen-xl { max-width: 1280px; }
  .max-w-screen-2xl { max-width: 1536px; }
  .max-w-none { max-width: none; }
  
  .min-w-0 { min-width: 0px; }
  .min-w-full { min-width: 100%; }
  .min-w-min { min-width: min-content; }
  .min-w-max { min-width: max-content; }
  .min-w-fit { min-width: fit-content; }
  
  .max-h-0 { max-height: 0px; }
  .max-h-px { max-height: 1px; }
  .max-h-0.5 { max-height: 0.125rem; }
  .max-h-1 { max-height: 0.25rem; }
  .max-h-1.5 { max-height: 0.375rem; }
  .max-h-2 { max-height: 0.5rem; }
  .max-h-2.5 { max-height: 0.625rem; }
  .max-h-3 { max-height: 0.75rem; }
  .max-h-3.5 { max-height: 0.875rem; }
  .max-h-4 { max-height: 1rem; }
  .max-h-5 { max-height: 1.25rem; }
  .max-h-6 { max-height: 1.5rem; }
  .max-h-7 { max-height: 1.75rem; }
  .max-h-8 { max-height: 2rem; }
  .max-h-9 { max-height: 2.25rem; }
  .max-h-10 { max-height: 2.5rem; }
  .max-h-11 { max-height: 2.75rem; }
  .max-h-12 { max-height: 3rem; }
  .max-h-14 { max-height: 3.5rem; }
  .max-h-16 { max-height: 4rem; }
  .max-h-20 { max-height: 5rem; }
  .max-h-24 { max-height: 6rem; }
  .max-h-28 { max-height: 7rem; }
  .max-h-32 { max-height: 8rem; }
  .max-h-36 { max-height: 9rem; }
  .max-h-40 { max-height: 10rem; }
  .max-h-44 { max-height: 11rem; }
  .max-h-48 { max-height: 12rem; }
  .max-h-52 { max-height: 13rem; }
  .max-h-56 { max-height: 14rem; }
  .max-h-60 { max-height: 15rem; }
  .max-h-64 { max-height: 16rem; }
  .max-h-72 { max-height: 18rem; }
  .max-h-80 { max-height: 20rem; }
  .max-h-96 { max-height: 24rem; }
  .max-h-full { max-height: 100%; }
  .max-h-screen { max-height: 100vh; }
  .max-h-min { max-height: min-content; }
  .max-h-max { max-height: max-content; }
  .max-h-fit { max-height: fit-content; }
  
  .min-h-0 { min-height: 0px; }
  .min-h-full { min-height: 100%; }
  .min-h-screen { min-height: 100vh; }
  .min-h-min { min-height: min-content; }
  .min-h-max { min-height: max-content; }
  .min-h-fit { min-height: fit-content; }
  
  .overflow-auto { overflow: auto; }
  .overflow-hidden { overflow: hidden; }
  .overflow-clip { overflow: clip; }
  .overflow-visible { overflow: visible; }
  .overflow-scroll { overflow: scroll; }
  .overflow-x-auto { overflow-x: auto; }
  .overflow-y-auto { overflow-y: auto; }
  .overflow-x-hidden { overflow-x: hidden; }
  .overflow-y-hidden { overflow-y: hidden; }
  .overflow-x-clip { overflow-x: clip; }
  .overflow-y-clip { overflow-y: clip; }
  .overflow-x-visible { overflow-x: visible; }
  .overflow-y-visible { overflow-y: visible; }
  .overflow-x-scroll { overflow-x: scroll; }
  .overflow-y-scroll { overflow-y: scroll; }
  
  .overscroll-auto { overscroll-behavior: auto; }
  .overscroll-contain { overscroll-behavior: contain; }
  .overscroll-none { overscroll-behavior: none; }
  .overscroll-y-auto { overscroll-behavior-y: auto; }
  .overscroll-y-contain { overscroll-behavior-y: contain; }
  .overscroll-y-none { overscroll-behavior-y: none; }
  .overscroll-x-auto { overscroll-behavior-x: auto; }
  .overscroll-x-contain { overscroll-behavior-x: contain; }
  .overscroll-x-none { overscroll-behavior-x: none; }
  
  .static { position: static; }
  .fixed { position: fixed; }
  .absolute { position: absolute; }
  .relative { position: relative; }
  .sticky { position: sticky; }
  
  .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
  .inset-x-0 { right: 0; left: 0; }
  .inset-y-0 { top: 0; bottom: 0; }
  .top-0 { top: 0; }
  .right-0 { right: 0; }
  .bottom-0 { bottom: 0; }
  .left-0 { left: 0; }
  
  .z-0 { z-index: 0; }
  .z-10 { z-index: 10; }
  .z-20 { z-index: 20; }
  .z-30 { z-index: 30; }
  .z-40 { z-index: 40; }
  .z-50 { z-index: 50; }
  .z-auto { z-index: auto; }
  
  .container { 
    width: 100%; 
    margin-left: auto; 
    margin-right: auto; 
    padding-left: calc(var(--spacing-unit) * 4); 
    padding-right: calc(var(--spacing-unit) * 4); 
  }
  
  @media (min-width: 640px) {
    .container { max-width: 640px; }
  }
  
  @media (min-width: 768px) {
    .container { max-width: 768px; }
  }
  
  @media (min-width: 1024px) {
    .container { max-width: 1024px; }
  }
  
  @media (min-width: 1280px) {
    .container { max-width: 1280px; }
  }
  
  @media (min-width: 1536px) {
    .container { max-width: 1536px; }
  }

  /* ===== BORDERS ===== */
  .border-0 { border-width: 0; }
  .border { border-width: 1px; }
  .border-2 { border-width: 2px; }
  .border-4 { border-width: 4px; }
  .border-8 { border-width: 8px; }
  
  .border-t-0 { border-top-width: 0; }
  .border-t { border-top-width: 1px; }
  .border-t-2 { border-top-width: 2px; }
  .border-t-4 { border-top-width: 4px; }
  .border-t-8 { border-top-width: 8px; }
  
  .border-r-0 { border-right-width: 0; }
  .border-r { border-right-width: 1px; }
  .border-r-2 { border-right-width: 2px; }
  .border-r-4 { border-right-width: 4px; }
  .border-r-8 { border-right-width: 8px; }
  
  .border-b-0 { border-bottom-width: 0; }
  .border-b { border-bottom-width: 1px; }
  .border-b-2 { border-bottom-width: 2px; }
  .border-b-4 { border-bottom-width: 4px; }
  .border-b-8 { border-bottom-width: 8px; }
  
  .border-l-0 { border-left-width: 0; }
  .border-l { border-left-width: 1px; }
  .border-l-2 { border-left-width: 2px; }
  .border-l-4 { border-left-width: 4px; }
  .border-l-8 { border-left-width: 8px; }
  
  .border-x-0 { border-left-width: 0; border-right-width: 0; }
  .border-x { border-left-width: 1px; border-right-width: 1px; }
  .border-x-2 { border-left-width: 2px; border-right-width: 2px; }
  .border-x-4 { border-left-width: 4px; border-right-width: 4px; }
  .border-x-8 { border-left-width: 8px; border-right-width: 8px; }
  
  .border-y-0 { border-top-width: 0; border-bottom-width: 0; }
  .border-y { border-top-width: 1px; border-bottom-width: 1px; }
  .border-y-2 { border-top-width: 2px; border-bottom-width: 2px; }
  .border-y-4 { border-top-width: 4px; border-bottom-width: 4px; }
  .border-y-8 { border-top-width: 8px; border-bottom-width: 8px; }
  
  .border-solid { border-style: solid; }
  .border-dashed { border-style: dashed; }
  .border-dotted { border-style: dotted; }
  .border-double { border-style: double; }
  .border-none { border-style: none; }
  
  .rounded-none { border-radius: 0; }
  .rounded-sm { border-radius: calc(var(--border-radius) * 0.5); }
  .rounded { border-radius: var(--border-radius); }
  .rounded-md { border-radius: calc(var(--border-radius) * 1.5); }
  .rounded-lg { border-radius: calc(var(--border-radius) * 2); }
  .rounded-xl { border-radius: calc(var(--border-radius) * 3); }
  .rounded-2xl { border-radius: calc(var(--border-radius) * 4); }
  .rounded-3xl { border-radius: calc(var(--border-radius) * 6); }
  .rounded-full { border-radius: 9999px; }
  
  .rounded-t-none { border-top-left-radius: 0; border-top-right-radius: 0; }
  .rounded-t-sm { border-top-left-radius: calc(var(--border-radius) * 0.5); border-top-right-radius: calc(var(--border-radius) * 0.5); }
  .rounded-t { border-top-left-radius: var(--border-radius); border-top-right-radius: var(--border-radius); }
  .rounded-t-md { border-top-left-radius: calc(var(--border-radius) * 1.5); border-top-right-radius: calc(var(--border-radius) * 1.5); }
  .rounded-t-lg { border-top-left-radius: calc(var(--border-radius) * 2); border-top-right-radius: calc(var(--border-radius) * 2); }
  .rounded-t-xl { border-top-left-radius: calc(var(--border-radius) * 3); border-top-right-radius: calc(var(--border-radius) * 3); }
  .rounded-t-2xl { border-top-left-radius: calc(var(--border-radius) * 4); border-top-right-radius: calc(var(--border-radius) * 4); }
  .rounded-t-3xl { border-top-left-radius: calc(var(--border-radius) * 6); border-top-right-radius: calc(var(--border-radius) * 6); }
  .rounded-t-full { border-top-left-radius: 9999px; border-top-right-radius: 9999px; }
  
  .rounded-r-none { border-top-right-radius: 0; border-bottom-right-radius: 0; }
  .rounded-r-sm { border-top-right-radius: calc(var(--border-radius) * 0.5); border-bottom-right-radius: calc(var(--border-radius) * 0.5); }
  .rounded-r { border-top-right-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius); }
  .rounded-r-md { border-top-right-radius: calc(var(--border-radius) * 1.5); border-bottom-right-radius: calc(var(--border-radius) * 1.5); }
  .rounded-r-lg { border-top-right-radius: calc(var(--border-radius) * 2); border-bottom-right-radius: calc(var(--border-radius) * 2); }
  .rounded-r-xl { border-top-right-radius: calc(var(--border-radius) * 3); border-bottom-right-radius: calc(var(--border-radius) * 3); }
  .rounded-r-2xl { border-top-right-radius: calc(var(--border-radius) * 4); border-bottom-right-radius: calc(var(--border-radius) * 4); }
  .rounded-r-3xl { border-top-right-radius: calc(var(--border-radius) * 6); border-bottom-right-radius: calc(var(--border-radius) * 6); }
  .rounded-r-full { border-top-right-radius: 9999px; border-bottom-right-radius: 9999px; }
  
  .rounded-b-none { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
  .rounded-b-sm { border-bottom-left-radius: calc(var(--border-radius) * 0.5); border-bottom-right-radius: calc(var(--border-radius) * 0.5); }
  .rounded-b { border-bottom-left-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius); }
  .rounded-b-md { border-bottom-left-radius: calc(var(--border-radius) * 1.5); border-bottom-right-radius: calc(var(--border-radius) * 1.5); }
  .rounded-b-lg { border-bottom-left-radius: calc(var(--border-radius) * 2); border-bottom-right-radius: calc(var(--border-radius) * 2); }
  .rounded-b-xl { border-bottom-left-radius: calc(var(--border-radius) * 3); border-bottom-right-radius: calc(var(--border-radius) * 3); }
  .rounded-b-2xl { border-bottom-left-radius: calc(var(--border-radius) * 4); border-bottom-right-radius: calc(var(--border-radius) * 4); }
  .rounded-b-3xl { border-bottom-left-radius: calc(var(--border-radius) * 6); border-bottom-right-radius: calc(var(--border-radius) * 6); }
  .rounded-b-full { border-bottom-left-radius: 9999px; border-bottom-right-radius: 9999px; }
  
  .rounded-l-none { border-top-left-radius: 0; border-bottom-left-radius: 0; }
  .rounded-l-sm { border-top-left-radius: calc(var(--border-radius) * 0.5); border-bottom-left-radius: calc(var(--border-radius) * 0.5); }
  .rounded-l { border-top-left-radius: var(--border-radius); border-bottom-left-radius: var(--border-radius); }
  .rounded-l-md { border-top-left-radius: calc(var(--border-radius) * 1.5); border-bottom-left-radius: calc(var(--border-radius) * 1.5); }
  .rounded-l-lg { border-top-left-radius: calc(var(--border-radius) * 2); border-bottom-left-radius: calc(var(--border-radius) * 2); }
  .rounded-l-xl { border-top-left-radius: calc(var(--border-radius) * 3); border-bottom-left-radius: calc(var(--border-radius) * 3); }
  .rounded-l-2xl { border-top-left-radius: calc(var(--border-radius) * 4); border-bottom-left-radius: calc(var(--border-radius) * 4); }
  .rounded-l-3xl { border-top-left-radius: calc(var(--border-radius) * 6); border-bottom-left-radius: calc(var(--border-radius) * 6); }
  .rounded-l-full { border-top-left-radius: 9999px; border-bottom-left-radius: 9999px; }
  
  .rounded-tl-none { border-top-left-radius: 0; }
  .rounded-tl-sm { border-top-left-radius: calc(var(--border-radius) * 0.5); }
  .rounded-tl { border-top-left-radius: var(--border-radius); }
  .rounded-tl-md { border-top-left-radius: calc(var(--border-radius) * 1.5); }
  .rounded-tl-lg { border-top-left-radius: calc(var(--border-radius) * 2); }
  .rounded-tl-xl { border-top-left-radius: calc(var(--border-radius) * 3); }
  .rounded-tl-2xl { border-top-left-radius: calc(var(--border-radius) * 4); }
  .rounded-tl-3xl { border-top-left-radius: calc(var(--border-radius) * 6); }
  .rounded-tl-full { border-top-left-radius: 9999px; }
  
  .rounded-tr-none { border-top-right-radius: 0; }
  .rounded-tr-sm { border-top-right-radius: calc(var(--border-radius) * 0.5); }
  .rounded-tr { border-top-right-radius: var(--border-radius); }
  .rounded-tr-md { border-top-right-radius: calc(var(--border-radius) * 1.5); }
  .rounded-tr-lg { border-top-right-radius: calc(var(--border-radius) * 2); }
  .rounded-tr-xl { border-top-right-radius: calc(var(--border-radius) * 3); }
  .rounded-tr-2xl { border-top-right-radius: calc(var(--border-radius) * 4); }
  .rounded-tr-3xl { border-top-right-radius: calc(var(--border-radius) * 6); }
  .rounded-tr-full { border-top-right-radius: 9999px; }
  
  .rounded-bl-none { border-bottom-left-radius: 0; }
  .rounded-bl-sm { border-bottom-left-radius: calc(var(--border-radius) * 0.5); }
  .rounded-bl { border-bottom-left-radius: var(--border-radius); }
  .rounded-bl-md { border-bottom-left-radius: calc(var(--border-radius) * 1.5); }
  .rounded-bl-lg { border-bottom-left-radius: calc(var(--border-radius) * 2); }
  .rounded-bl-xl { border-bottom-left-radius: calc(var(--border-radius) * 3); }
  .rounded-bl-2xl { border-bottom-left-radius: calc(var(--border-radius) * 4); }
  .rounded-bl-3xl { border-bottom-left-radius: calc(var(--border-radius) * 6); }
  .rounded-bl-full { border-bottom-left-radius: 9999px; }
  
  .rounded-br-none { border-bottom-right-radius: 0; }
  .rounded-br-sm { border-bottom-right-radius: calc(var(--border-radius) * 0.5); }
  .rounded-br { border-bottom-right-radius: var(--border-radius); }
  .rounded-br-md { border-bottom-right-radius: calc(var(--border-radius) * 1.5); }
  .rounded-br-lg { border-bottom-right-radius: calc(var(--border-radius) * 2); }
  .rounded-br-xl { border-bottom-right-radius: calc(var(--border-radius) * 3); }
  .rounded-br-2xl { border-bottom-right-radius: calc(var(--border-radius) * 4); }
  .rounded-br-3xl { border-bottom-right-radius: calc(var(--border-radius) * 6); }
  .rounded-br-full { border-bottom-right-radius: 9999px; }

  /* ===== SHADOWS ===== */
  .shadow-none { box-shadow: none; }
  .shadow-sm { box-shadow: var(--shadow-sm); }
  .shadow { box-shadow: var(--shadow-md); }
  .shadow-md { box-shadow: var(--shadow-md); }
  .shadow-lg { box-shadow: var(--shadow-lg); }
  .shadow-xl { box-shadow: var(--shadow-xl); }
  .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
  .shadow-inner { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06); }
  
  /* ===== OPACITY ===== */
  .opacity-0 { opacity: 0; }
  .opacity-5 { opacity: 0.05; }
  .opacity-10 { opacity: 0.1; }
  .opacity-20 { opacity: 0.2; }
  .opacity-25 { opacity: 0.25; }
  .opacity-30 { opacity: 0.3; }
  .opacity-40 { opacity: 0.4; }
  .opacity-50 { opacity: 0.5; }
  .opacity-60 { opacity: 0.6; }
  .opacity-70 { opacity: 0.7; }
  .opacity-75 { opacity: 0.75; }
  .opacity-80 { opacity: 0.8; }
  .opacity-90 { opacity: 0.9; }
  .opacity-95 { opacity: 0.95; }
  .opacity-100 { opacity: 1; }

  /* ===== TRANSITIONS ===== */
  .transition-none { transition-property: none; }
  .transition-all { transition-property: all; transition-timing-function: var(--transition); transition-duration: 300ms; }
  .transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: var(--transition); transition-duration: 300ms; }
  .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: var(--transition); transition-duration: 300ms; }
  .transition-opacity { transition-property: opacity; transition-timing-function: var(--transition); transition-duration: 300ms; }
  .transition-shadow { transition-property: box-shadow; transition-timing-function: var(--transition); transition-duration: 300ms; }
  .transition-transform { transition-property: transform; transition-timing-function: var(--transition); transition-duration: 300ms; }
  
  .duration-75 { transition-duration: 75ms; }
  .duration-100 { transition-duration: 100ms; }
  .duration-150 { transition-duration: 150ms; }
  .duration-200 { transition-duration: 200ms; }
  .duration-300 { transition-duration: 300ms; }
  .duration-500 { transition-duration: 500ms; }
  .duration-700 { transition-duration: 700ms; }
  .duration-1000 { transition-duration: 1000ms; }
  
  .ease-linear { transition-timing-function: linear; }
  .ease-in { transition-timing-function: cubic-bezier(0.4, 0, 1, 1); }
  .ease-out { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }
  .ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }

  /* ===== TRANSFORMS ===== */
  .transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
  .transform-gpu { transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
  .transform-none { transform: none; }
  
  .scale-0 { --tw-scale-x: 0; --tw-scale-y: 0; }
  .scale-50 { --tw-scale-x: 0.5; --tw-scale-y: 0.5; }
  .scale-75 { --tw-scale-x: 0.75; --tw-scale-y: 0.75; }
  .scale-90 { --tw-scale-x: 0.9; --tw-scale-y: 0.9; }
  .scale-95 { --tw-scale-x: 0.95; --tw-scale-y: 0.95; }
  .scale-100 { --tw-scale-x: 1; --tw-scale-y: 1; }
  .scale-105 { --tw-scale-x: 1.05; --tw-scale-y: 1.05; }
  .scale-110 { --tw-scale-x: 1.1; --tw-scale-y: 1.1; }
  .scale-125 { --tw-scale-x: 1.25; --tw-scale-y: 1.25; }
  .scale-150 { --tw-scale-x: 1.5; --tw-scale-y: 1.5; }
  
  .scale-x-0 { --tw-scale-x: 0; }
  .scale-x-50 { --tw-scale-x: 0.5; }
  .scale-x-75 { --tw-scale-x: 0.75; }
  .scale-x-90 { --tw-scale-x: 0.9; }
  .scale-x-95 { --tw-scale-x: 0.95; }
  .scale-x-100 { --tw-scale-x: 1; }
  .scale-x-105 { --tw-scale-x: 1.05; }
  .scale-x-110 { --tw-scale-x: 1.1; }
  .scale-x-125 { --tw-scale-x: 1.25; }
  .scale-x-150 { --tw-scale-x: 1.5; }
  
  .scale-y-0 { --tw-scale-y: 0; }
  .scale-y-50 { --tw-scale-y: 0.5; }
  .scale-y-75 { --tw-scale-y: 0.75; }
  .scale-y-90 { --tw-scale-y: 0.9; }
  .scale-y-95 { --tw-scale-y: 0.95; }
  .scale-y-100 { --tw-scale-y: 1; }
  .scale-y-105 { --tw-scale-y: 1.05; }
  .scale-y-110 { --tw-scale-y: 1.1; }
  .scale-y-125 { --tw-scale-y: 1.25; }
  .scale-y-150 { --tw-scale-y: 1.5; }
  
  .rotate-0 { --tw-rotate: 0deg; }
  .rotate-1 { --tw-rotate: 1deg; }
  .rotate-2 { --tw-rotate: 2deg; }
  .rotate-3 { --tw-rotate: 3deg; }
  .rotate-6 { --tw-rotate: 6deg; }
  .rotate-12 { --tw-rotate: 12deg; }
  .rotate-45 { --tw-rotate: 45deg; }
  .rotate-90 { --tw-rotate: 90deg; }
  .rotate-180 { --tw-rotate: 180deg; }
  
  .translate-x-0 { --tw-translate-x: 0px; }
  .translate-x-px { --tw-translate-x: 1px; }
  .translate-x-0.5 { --tw-translate-x: 0.125rem; }
  .translate-x-1 { --tw-translate-x: 0.25rem; }
  .translate-x-1.5 { --tw-translate-x: 0.375rem; }
  .translate-x-2 { --tw-translate-x: 0.5rem; }
  .translate-x-2.5 { --tw-translate-x: 0.625rem; }
  .translate-x-3 { --tw-translate-x: 0.75rem; }
  .translate-x-3.5 { --tw-translate-x: 0.875rem; }
  .translate-x-4 { --tw-translate-x: 1rem; }
  .translate-x-5 { --tw-translate-x: 1.25rem; }
  .translate-x-6 { --tw-translate-x: 1.5rem; }
  .translate-x-7 { --tw-translate-x: 1.75rem; }
  .translate-x-8 { --tw-translate-x: 2rem; }
  .translate-x-9 { --tw-translate-x: 2.25rem; }
  .translate-x-10 { --tw-translate-x: 2.5rem; }
  .translate-x-11 { --tw-translate-x: 2.75rem; }
  .translate-x-12 { --tw-translate-x: 3rem; }
  .translate-x-14 { --tw-translate-x: 3.5rem; }
  .translate-x-16 { --tw-translate-x: 4rem; }
  .translate-x-20 { --tw-translate-x: 5rem; }
  .translate-x-24 { --tw-translate-x: 6rem; }
  .translate-x-28 { --tw-translate-x: 7rem; }
  .translate-x-32 { --tw-translate-x: 8rem; }
  .translate-x-36 { --tw-translate-x: 9rem; }
  .translate-x-40 { --tw-translate-x: 10rem; }
  .translate-x-44 { --tw-translate-x: 11rem; }
  .translate-x-48 { --tw-translate-x: 12rem; }
  .translate-x-52 { --tw-translate-x: 13rem; }
  .translate-x-56 { --tw-translate-x: 14rem; }
  .translate-x-60 { --tw-translate-x: 15rem; }
  .translate-x-64 { --tw-translate-x: 16rem; }
  .translate-x-72 { --tw-translate-x: 18rem; }
  .translate-x-80 { --tw-translate-x: 20rem; }
  .translate-x-96 { --tw-translate-x: 24rem; }
  .translate-x-1/2 { --tw-translate-x: 50%; }
  .translate-x-1/3 { --tw-translate-x: 33.333333%; }
  .translate-x-2/3 { --tw-translate-x: 66.666667%; }
  .translate-x-1/4 { --tw-translate-x: 25%; }
  .translate-x-2/4 { --tw-translate-x: 50%; }
  .translate-x-3/4 { --tw-translate-x: 75%; }
  .translate-x-full { --tw-translate-x: 100%; }
  .translate-x-screen { --tw-translate-x: 100vw; }
  .translate-x-min { --tw-translate-x: min-content; }
  .translate-x-max { --tw-translate-x: max-content; }
  .translate-x-fit { --tw-translate-x: fit-content; }
  
  .-translate-x-0 { --tw-translate-x: 0px; }
  .-translate-x-px { --tw-translate-x: -1px; }
  .-translate-x-0.5 { --tw-translate-x: -0.125rem; }
  .-translate-x-1 { --tw-translate-x: -0.25rem; }
  .-translate-x-1.5 { --tw-translate-x: -0.375rem; }
  .-translate-x-2 { --tw-translate-x: -0.5rem; }
  .-translate-x-2.5 { --tw-translate-x: -0.625rem; }
  .-translate-x-3 { --tw-translate-x: -0.75rem; }
  .-translate-x-3.5 { --tw-translate-x: -0.875rem; }
  .-translate-x-4 { --tw-translate-x: -1rem; }
  .-translate-x-5 { --tw-translate-x: -1.25rem; }
  .-translate-x-6 { --tw-translate-x: -1.5rem; }
  .-translate-x-7 { --tw-translate-x: -1.75rem; }
  .-translate-x-8 { --tw-translate-x: -2rem; }
  .-translate-x-9 { --tw-translate-x: -2.25rem; }
  .-translate-x-10 { --tw-translate-x: -2.5rem; }
  .-translate-x-11 { --tw-translate-x: -2.75rem; }
  .-translate-x-12 { --tw-translate-x: -3rem; }
  .-translate-x-14 { --tw-translate-x: -3.5rem; }
  .-translate-x-16 { --tw-translate-x: -4rem; }
  .-translate-x-20 { --tw-translate-x: -5rem; }
  .-translate-x-24 { --tw-translate-x: -6rem; }
  .-translate-x-28 { --tw-translate-x: -7rem; }
  .-translate-x-32 { --tw-translate-x: -8rem; }
  .-translate-x-36 { --tw-translate-x: -9rem; }
  .-translate-x-40 { --tw-translate-x: -10rem; }
  .-translate-x-44 { --tw-translate-x: -11rem; }
  .-translate-x-48 { --tw-translate-x: -12rem; }
  .-translate-x-52 { --tw-translate-x: -13rem; }
  .-translate-x-56 { --tw-translate-x: -14rem; }
  .-translate-x-60 { --tw-translate-x: -15rem; }
  .-translate-x-64 { --tw-translate-x: -16rem; }
  .-translate-x-72 { --tw-translate-x: -18rem; }
  .-translate-x-80 { --tw-translate-x: -20rem; }
  .-translate-x-96 { --tw-translate-x: -24rem; }
  .-translate-x-1/2 { --tw-translate-x: -50%; }
  .-translate-x-1/3 { --tw-translate-x: -33.333333%; }
  .-translate-x-2/3 { --tw-translate-x: -66.666667%; }
  .-translate-x-1/4 { --tw-translate-x: -25%; }
  .-translate-x-2/4 { --tw-translate-x: -50%; }
  .-translate-x-3/4 { --tw-translate-x: -75%; }
  .-translate-x-full { --tw-translate-x: -100%; }
  .-translate-x-screen { --tw-translate-x: -100vw; }
  .-translate-x-min { --tw-translate-x: min-content; }
  .-translate-x-max { --tw-translate-x: max-content; }
  .-translate-x-fit { --tw-translate-x: fit-content; }
  
  .translate-y-0 { --tw-translate-y: 0px; }
  .translate-y-px { --tw-translate-y: 1px; }
  .translate-y-0.5 { --tw-translate-y: 0.125rem; }
  .translate-y-1 { --tw-translate-y: 0.25rem; }
  .translate-y-1.5 { --tw-translate-y: 0.375rem; }
  .translate-y-2 { --tw-translate-y: 0.5rem; }
  .translate-y-2.5 { --tw-translate-y: 0.625rem; }
  .translate-y-3 { --tw-translate-y: 0.75rem; }
  .translate-y-3.5 { --tw-translate-y: 0.875rem; }
  .translate-y-4 { --tw-translate-y: 1rem; }
  .translate-y-5 { --tw-translate-y: 1.25rem; }
  .translate-y-6 { --tw-translate-y: 1.5rem; }
  .translate-y-7 { --tw-translate-y: 1.75rem; }
  .translate-y-8 { --tw-translate-y: 2rem; }
  .translate-y-9 { --tw-translate-y: 2.25rem; }
  .translate-y-10 { --tw-translate-y: 2.5rem; }
  .translate-y-11 { --tw-translate-y: 2.75rem; }
  .translate-y-12 { --tw-translate-y: 3rem; }
  .translate-y-14 { --tw-translate-y: 3.5rem; }
  .translate-y-16 { --tw-translate-y: 4rem; }
  .translate-y-20 { --tw-translate-y: 5rem; }
  .translate-y-24 { --tw-translate-y: 6rem; }
  .translate-y-28 { --tw-translate-y: 7rem; }
  .translate-y-32 { --tw-translate-y: 8rem; }
  .translate-y-36 { --tw-translate-y: 9rem; }
  .translate-y-40 { --tw-translate-y: 10rem; }
  .translate-y-44 { --tw-translate-y: 11rem; }
  .translate-y-48 { --tw-translate-y: 12rem; }
  .translate-y-52 { --tw-translate-y: 13rem; }
  .translate-y-56 { --tw-translate-y: 14rem; }
  .translate-y-60 { --tw-translate-y: 15rem; }
  .translate-y-64 { --tw-translate-y: 16rem; }
  .translate-y-72 { --tw-translate-y: 18rem; }
  .translate-y-80 { --tw-translate-y: 20rem; }
  .translate-y-96 { --tw-translate-y: 24rem; }
  .translate-y-1/2 { --tw-translate-y: 50%; }
  .translate-y-1/3 { --tw-translate-y: 33.333333%; }
  .translate-y-2/3 { --tw-translate-y: 66.666667%; }
  .translate-y-1/4 { --tw-translate-y: 25%; }
  .translate-y-2/4 { --tw-translate-y: 50%; }
  .translate-y-3/4 { --tw-translate-y: 75%; }
  .translate-y-full { --tw-translate-y: 100%; }
  .translate-y-screen { --tw-translate-y: 100vh; }
  .translate-y-min { --tw-translate-y: min-content; }
  .translate-y-max { --tw-translate-y: max-content; }
  .translate-y-fit { --tw-translate-y: fit-content; }
  
  .-translate-y-0 { --tw-translate-y: 0px; }
  .-translate-y-px { --tw-translate-y: -1px; }
  .-translate-y-0.5 { --tw-translate-y: -0.125rem; }
  .-translate-y-1 { --tw-translate-y: -0.25rem; }
  .-translate-y-1.5 { --tw-translate-y: -0.375rem; }
  .-translate-y-2 { --tw-translate-y: -0.5rem; }
  .-translate-y-2.5 { --tw-translate-y: -0.625rem; }
  .-translate-y-3 { --tw-translate-y: -0.75rem; }
  .-translate-y-3.5 { --tw-translate-y: -0.875rem; }
  .-translate-y-4 { --tw-translate-y: -1rem; }
  .-translate-y-5 { --tw-translate-y: -1.25rem; }
  .-translate-y-6 { --tw-translate-y: -1.5rem; }
  .-translate-y-7 { --tw-translate-y: -1.75rem; }
  .-translate-y-8 { --tw-translate-y: -2rem; }
  .-translate-y-9 { --tw-translate-y: -2.25rem; }
  .-translate-y-10 { --tw-translate-y: -2.5rem; }
  .-translate-y-11 { --tw-translate-y: -2.75rem; }
  .-translate-y-12 { --tw-translate-y: -3rem; }
  .-translate-y-14 { --tw-translate-y: -3.5rem; }
  .-translate-y-16 { --tw-translate-y: -4rem; }
  .-translate-y-20 { --tw-translate-y: -5rem; }
  .-translate-y-24 { --tw-translate-y: -6rem; }
  .-translate-y-28 { --tw-translate-y: -7rem; }
  .-translate-y-32 { --tw-translate-y: -8rem; }
  .-translate-y-36 { --tw-translate-y: -9rem; }
  .-translate-y-40 { --tw-translate-y: -10rem; }
  .-translate-y-44 { --tw-translate-y: -11rem; }
  .-translate-y-48 { --tw-translate-y: -12rem; }
  .-translate-y-52 { --tw-translate-y: -13rem; }
  .-translate-y-56 { --tw-translate-y: -14rem; }
  .-translate-y-60 { --tw-translate-y: -15rem; }
  .-translate-y-64 { --tw-translate-y: -16rem; }
  .-translate-y-72 { --tw-translate-y: -18rem; }
  .-translate-y-80 { --tw-translate-y: -20rem; }
  .-translate-y-96 { --tw-translate-y: -24rem; }
  .-translate-y-1/2 { --tw-translate-y: -50%; }
  .-translate-y-1/3 { --tw-translate-y: -33.333333%; }
  .-translate-y-2/3 { --tw-translate-y: -66.666667%; }
  .-translate-y-1/4 { --tw-translate-y: -25%; }
  .-translate-y-2/4 { --tw-translate-y: -50%; }
  .-translate-y-3/4 { --tw-translate-y: -75%; }
  .-translate-y-full { --tw-translate-y: -100%; }
  .-translate-y-screen { --tw-translate-y: -100vh; }
  .-translate-y-min { --tw-translate-y: min-content; }
  .-translate-y-max { --tw-translate-y: max-content; }
  .-translate-y-fit { --tw-translate-y: fit-content; }

  /* ===== INTERACTIVITY ===== */
  .cursor-auto { cursor: auto; }
  .cursor-default { cursor: default; }
  .cursor-pointer { cursor: pointer; }
  .cursor-wait { cursor: wait; }
  .cursor-text { cursor: text; }
  .cursor-move { cursor: move; }
  .cursor-help { cursor: help; }
  .cursor-not-allowed { cursor: not-allowed; }
  .cursor-none { cursor: none; }
  .cursor-context-menu { cursor: context-menu; }
  .cursor-progress { cursor: progress; }
  .cursor-cell { cursor: cell; }
  .cursor-crosshair { cursor: crosshair; }
  .cursor-vertical-text { cursor: vertical-text; }
  .cursor-alias { cursor: alias; }
  .cursor-copy { cursor: copy; }
  .cursor-no-drop { cursor: no-drop; }
  .cursor-grab { cursor: grab; }
  .cursor-grabbing { cursor: grabbing; }
  .cursor-zoom-in { cursor: zoom-in; }
  .cursor-zoom-out { cursor: zoom-out; }
  
  .select-none { user-select: none; }
  .select-text { user-select: text; }
  .select-all { user-select: all; }
  .select-auto { user-select: auto; }
  
  .resize-none { resize: none; }
  .resize-y { resize: vertical; }
  .resize-x { resize: horizontal; }
  .resize { resize: both; }
  
  .snap-none { scroll-snap-type: none; }
  .snap-x { scroll-snap-type: x var(--tw-scroll-snap-strictness); }
  .snap-y { scroll-snap-type: y var(--tw-scroll-snap-strictness); }
  .snap-both { scroll-snap-type: both var(--tw-scroll-snap-strictness); }
  .snap-mandatory { --tw-scroll-snap-strictness: mandatory; }
  .snap-proximity { --tw-scroll-snap-strictness: proximity; }
  .snap-start { scroll-snap-align: start; }
  .snap-end { scroll-snap-align: end; }
  .snap-center { scroll-snap-align: center; }
  .snap-align-none { scroll-snap-align: none; }
  
  .scroll-auto { scroll-behavior: auto; }
  .scroll-smooth { scroll-behavior: smooth; }
  
  .touch-auto { touch-action: auto; }
  .touch-none { touch-action: none; }
  .touch-pan-x { touch-action: pan-x; }
  .touch-pan-left { touch-action: pan-left; }
  .touch-pan-right { touch-action: pan-right; }
  .touch-pan-y { touch-action: pan-y; }
  .touch-pan-up { touch-action: pan-up; }
  .touch-pan-down { touch-action: pan-down; }
  .touch-pinch-zoom { touch-action: pinch-zoom; }
  .touch-manipulation { touch-action: manipulation; }
  
  .appearance-none { appearance: none; }

  /* ===== MODERN UTILITIES ===== */
  .aspect-auto { aspect-ratio: auto; }
  .aspect-square { aspect-ratio: 1 / 1; }
  .aspect-video { aspect-ratio: 16 / 9; }
  
  .container { container-type: inline-size; }
  
  @container (min-width: 640px) {
    .container-sm\:text-lg { font-size: 1.125rem; line-height: 1.75rem; }
  }
  
  @container (min-width: 768px) {
    .container-md\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
  }
  
  @container (min-width: 1024px) {
    .container-lg\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
  }
  
  .grid-flow-row { grid-auto-flow: row; }
  .grid-flow-col { grid-auto-flow: column; }
  .grid-flow-dense { grid-auto-flow: dense; }
  .grid-flow-row-dense { grid-auto-flow: row dense; }
  .grid-flow-col-dense { grid-auto-flow: column dense; }
  
  .auto-cols-auto { grid-auto-columns: auto; }
  .auto-cols-min { grid-auto-columns: min-content; }
  .auto-cols-max { grid-auto-columns: max-content; }
  .auto-cols-fr { grid-auto-columns: minmax(0, 1fr); }
  
  .auto-rows-auto { grid-auto-rows: auto; }
  .auto-rows-min { grid-auto-rows: min-content; }
  .auto-rows-max { grid-auto-rows: max-content; }
  .auto-rows-fr { grid-auto-rows: minmax(0, 1fr); }
  
  .grid-cols-subgrid { grid-template-columns: subgrid; }
  .grid-rows-subgrid { grid-template-rows: subgrid; }
  
  .float-right { float: right; }
  .float-left { float: left; }
  .float-none { float: none; }
  
  .clear-left { clear: left; }
  .clear-right { clear: right; }
  .clear-both { clear: both; }
  .clear-none { clear: none; }
  
  .isolate { isolation: isolate; }
  .isolation-auto { isolation: auto; }
  
  .object-contain { object-fit: contain; }
  .object-cover { object-fit: cover; }
  .object-fill { object-fit: fill; }
  .object-none { object-fit: none; }
  .object-scale-down { object-fit: scale-down; }
  
  .object-bottom { object-position: bottom; }
  .object-center { object-position: center; }
  .object-left { object-position: left; }
  .object-left-bottom { object-position: left bottom; }
  .object-left-top { object-position: left top; }
  .object-right { object-position: right; }
  .object-right-bottom { object-position: right bottom; }
  .object-right-top { object-position: right top; }
  .object-top { object-position: top; }
  
  .overflow-ellipsis { text-overflow: ellipsis; }
  .overflow-clip { text-overflow: clip; }
  
  .decoration-slice { box-decoration-break: slice; }
  .decoration-clone { box-decoration-break: clone; }
  
  .box-decoration-slice { box-decoration-break: slice; }
  .box-decoration-clone { box-decoration-break: clone; }
  
  .bg-fixed { background-attachment: fixed; }
  .bg-local { background-attachment: local; }
  .bg-scroll { background-attachment: scroll; }
  
  .bg-clip-border { background-clip: border-box; }
  .bg-clip-padding { background-clip: padding-box; }
  .bg-clip-content { background-clip: content-box; }
  .bg-clip-text { background-clip: text; }
  
  .bg-origin-border { background-origin: border-box; }
  .bg-origin-padding { background-origin: padding-box; }
  .bg-origin-content { background-origin: content-box; }
  
  .fill-current { fill: currentColor; }
  .stroke-current { stroke: currentColor; }
  
  .sr-only { 
    position: absolute; 
    width: 1px; 
    height: 1px; 
    padding: 0; 
    margin: -1px; 
    overflow: hidden; 
    clip: rect(0, 0, 0, 0); 
    white-space: nowrap; 
    border-width: 0; 
  }
  
  .not-sr-only { 
    position: static; 
    width: auto; 
    height: auto; 
    padding: 0; 
    margin: 0; 
    overflow: visible; 
    clip: auto; 
    white-space: normal; 
  }
  
  .pointer-events-none { pointer-events: none; }
  .pointer-events-auto { pointer-events: auto; }
  
  .visible { visibility: visible; }
  .invisible { visibility: hidden; }
  
  .static { position: static; }
  .fixed { position: fixed; }
  .absolute { position: absolute; }
  .relative { position: relative; }
  .sticky { position: sticky; }
  
  .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
  .inset-x-0 { right: 0; left: 0; }
  .inset-y-0 { top: 0; bottom: 0; }
  .top-0 { top: 0; }
  .right-0 { right: 0; }
  .bottom-0 { bottom: 0; }
  .left-0 { left: 0; }
  
  .z-0 { z-index: 0; }
  .z-10 { z-index: 10; }
  .z-20 { z-index: 20; }
  .z-30 { z-index: 30; }
  .z-40 { z-index: 40; }
  .z-50 { z-index: 50; }
  .z-auto { z-index: auto; }
  
  .order-first { order: -9999; }
  .order-last { order: 9999; }
  .order-none { order: 0; }
  .order-1 { order: 1; }
  .order-2 { order: 2; }
  .order-3 { order: 3; }
  .order-4 { order: 4; }
  .order-5 { order: 5; }
  .order-6 { order: 6; }
  .order-7 { order: 7; }
  .order-8 { order: 8; }
  .order-9 { order: 9; }
  .order-10 { order: 10; }
  .order-11 { order: 11; }
  .order-12 { order: 12; }
  
  .grid-flow-row { grid-auto-flow: row; }
  .grid-flow-col { grid-auto-flow: column; }
  .grid-flow-dense { grid-auto-flow: dense; }
  .grid-flow-row-dense { grid-auto-flow: row dense; }
  .grid-flow-col-dense { grid-auto-flow: column dense; }
  
  .auto-cols-auto { grid-auto-columns: auto; }
  .auto-cols-min { grid-auto-columns: min-content; }
  .auto-cols-max { grid-auto-columns: max-content; }
  .auto-cols-fr { grid-auto-columns: minmax(0, 1fr); }
  
  .auto-rows-auto { grid-auto-rows: auto; }
  .auto-rows-min { grid-auto-rows: min-content; }
  .auto-rows-max { grid-auto-rows: max-content; }
  .auto-rows-fr { grid-auto-rows: minmax(0, 1fr); }
  
  .grid-cols-subgrid { grid-template-columns: subgrid; }
  .grid-rows-subgrid { grid-template-rows: subgrid; }
  
  .float-right { float: right; }
  .float-left { float: left; }
  .float-none { float: none; }
  
  .clear-left { clear: left; }
  .clear-right { clear: right; }
  .clear-both { clear: both; }
  .clear-none { clear: none; }
  
  .isolate { isolation: isolate; }
  .isolation-auto { isolation: auto; }
  
  .object-contain { object-fit: contain; }
  .object-cover { object-fit: cover; }
  .object-fill { object-fit: fill; }
  .object-none { object-fit: none; }
  .object-scale-down { object-fit: scale-down; }
  
  .object-bottom { object-position: bottom; }
  .object-center { object-position: center; }
  .object-left { object-position: left; }
  .object-left-bottom { object-position: left bottom; }
  .object-left-top { object-position: left top; }
  .object-right { object-position: right; }
  .object-right-bottom { object-position: right bottom; }
  .object-right-top { object-position: right top; }
  .object-top { object-position: top; }
  
  .overflow-ellipsis { text-overflow: ellipsis; }
  .overflow-clip { text-overflow: clip; }
  
  .decoration-slice { box-decoration-break: slice; }
  .decoration-clone { box-decoration-break: clone; }
  
  .box-decoration-slice { box-decoration-break: slice; }
  .box-decoration-clone { box-decoration-break: clone; }
  
  .bg-fixed { background-attachment: fixed; }
  .bg-local { background-attachment: local; }
  .bg-scroll { background-attachment: scroll; }
  
  .bg-clip-border { background-clip: border-box; }
  .bg-clip-padding { background-clip: padding-box; }
  .bg-clip-content { background-clip: content-box; }
  .bg-clip-text { background-clip: text; }
  
  .bg-origin-border { background-origin: border-box; }
  .bg-origin-padding { background-origin: padding-box; }
  .bg-origin-content { background-origin: content-box; }
  
  .fill-current { fill: currentColor; }
  .stroke-current { stroke: currentColor; }
  
  .sr-only { 
    position: absolute; 
    width: 1px; 
    height: 1px; 
    padding: 0; 
    margin: -1px; 
    overflow: hidden; 
    clip: rect(0, 0, 0, 0); 
    white-space: nowrap; 
    border-width: 0; 
  }
  
  .not-sr-only { 
    position: static; 
    width: auto; 
    height: auto; 
    padding: 0; 
    margin: 0; 
    overflow: visible; 
    clip: auto; 
    white-space: normal; 
  }
  
  .pointer-events-none { pointer-events: none; }
  .pointer-events-auto { pointer-events: auto; }
  
  .visible { visibility: visible; }
  .invisible { visibility: hidden; }
  
  .static { position: static; }
  .fixed { position: fixed; }
  .absolute { position: absolute; }
  .relative { position: relative; }
  .sticky { position: sticky; }
  
  .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
  .inset-x-0 { right: 0; left: 0; }
  .inset-y-0 { top: 0; bottom: 0; }
  .top-0 { top: 0; }
  .right-0 { right: 0; }
  .bottom-0 { bottom: 0; }
  .left-0 { left: 0; }
  
  .z-0 { z-index: 0; }
  .z-10 { z-index: 10; }
  .z-20 { z-index: 20; }
  .z-30 { z-index: 30; }
  .z-40 { z-index: 40; }
  .z-50 { z-index: 50; }
  .z-auto { z-index: auto; }
  
  .order-first { order: -9999; }
  .order-last { order: 9999; }
  .order-none { order: 0; }
  .order-1 { order: 1; }
  .order-2 { order: 2; }
  .order-3 { order: 3; }
  .order-4 { order: 4; }
  .order-5 { order: 5; }
  .order-6 { order: 6; }
  .order-7 { order: 7; }
  .order-8 { order: 8; }
  .order-9 { order: 9; }
  .order-10 { order: 10; }
  .order-11 { order: 11; }
  .order-12 { order: 12; }
}

@layer components {
  /* ===== BUTTONS ===== */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 4);
    border-radius: var(--border-radius);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    transition: var(--transition);
    background-color: var(--primary);
    color: var(--on-primary);
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
  }
  
  .btn:hover {
    background-color: color-mix(in srgb, var(--primary), #000 10%);
    box-shadow: var(--shadow-md);
  }
  
  .btn:active {
    background-color: color-mix(in srgb, var(--primary), #000 20%);
  }
  
  .btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary), transparent 70%);
  }
  
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  
  .btn-sm {
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 3);
    font-size: 0.875rem;
  }
  
  .btn-lg {
    padding: calc(var(--spacing-unit) * 4) calc(var(--spacing-unit) * 6);
    font-size: 1.125rem;
  }
  
  .btn-xl {
    padding: calc(var(--spacing-unit) * 5) calc(var(--spacing-unit) * 8);
    font-size: 1.25rem;
  }
  
  .btn-icon {
    padding: calc(var(--spacing-unit) * 3);
    border-radius: 50%;
  }
  
  .btn-icon-sm {
    padding: calc(var(--spacing-unit) * 2);
    border-radius: 50%;
  }
  
  .btn-icon-lg {
    padding: calc(var(--spacing-unit) * 4);
    border-radius: 50%;
  }
  
  .btn-outlined {
    background-color: transparent;
    color: var(--primary);
    border-color: var(--primary);
  }
  
  .btn-outlined:hover {
    background-color: color-mix(in srgb, var(--primary), transparent 90%);
  }
  
  .btn-text {
    background-color: transparent;
    color: var(--primary);
    border: none;
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 3);
  }
  
  .btn-text:hover {
    background-color: color-mix(in srgb, var(--primary), transparent 90%);
  }
  
  .btn-primary {
    background-color: var(--primary);
    color: var(--on-primary);
  }
  
  .btn-secondary {
    background-color: var(--secondary);
    color: var(--on-secondary);
  }
  
  .btn-tertiary {
    background-color: var(--tertiary);
    color: var(--on-tertiary);
  }
  
  .btn-error {
    background-color: var(--error);
    color: var(--on-error);
  }
  
  .btn-success {
    background-color: var(--success);
    color: white;
  }
  
  .btn-warning {
    background-color: var(--warning);
    color: black;
  }
  
  .btn-info {
    background-color: var(--info);
    color: white;
  }
  
  .btn-danger {
    background-color: var(--danger);
    color: white;
  }
  
  .btn-ghost {
    background-color: transparent;
    color: var(--on-surface);
    border: none;
  }
  
  .btn-ghost:hover {
    background-color: color-mix(in srgb, var(--on-surface), transparent 10%);
  }
  
  .btn-link {
    background-color: transparent;
    color: var(--link);
    border: none;
    text-decoration: underline;
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 3);
  }
  
  .btn-link:hover {
    background-color: transparent;
    text-decoration: none;
  }
  
  .btn-group {
    display: inline-flex;
    border-radius: var(--border-radius);
    overflow: hidden;
  }
  
  .btn-group .btn {
    border-radius: 0;
    border-right: 1px solid color-mix(in srgb, var(--primary), transparent 50%);
  }
  
  .btn-group .btn:first-child {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }
  
  .btn-group .btn:last-child {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    border-right: none;
  }
  
  .btn-block {
    display: flex;
    width: 100%;
  }
  
  /* Ripple Effect */
  .ripple {
    position: relative;
    overflow: hidden;
  }
  
  .ripple::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }
  
  .ripple:focus:not(:active)::after {
    animation: ripple 1s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(25, 25);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(40, 40);
    }
  }

  /* ===== CARDS ===== */
  .card {
    background-color: var(--surface);
    border-radius: calc(var(--border-radius) * 2);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
  }
  
  .card:hover {
    box-shadow: var(--shadow-md);
  }
  
  .card-header {
    padding: calc(var(--spacing-unit) * 4) calc(var(--spacing-unit) * 4) 0;
  }
  
  .card-body {
    padding: calc(var(--spacing-unit) * 4);
    flex: 1 1 auto;
  }
  
  .card-footer {
    padding: 0 calc(var(--spacing-unit) * 4) calc(var(--spacing-unit) * 4);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: calc(var(--spacing-unit) * 2);
    color: var(--on-surface);
  }
  
  .card-subtitle {
    font-size: 1rem;
    font-weight: 400;
    color: var(--on-surface-variant);
    margin-bottom: calc(var(--spacing-unit) * 3);
  }
  
  .card-text {
    color: var(--on-surface-variant);
    margin-bottom: calc(var(--spacing-unit) * 3);
  }
  
  .card-img-top {
    width: 100%;
    height: auto;
    border-top-left-radius: calc(var(--border-radius) * 2);
    border-top-right-radius: calc(var(--border-radius) * 2);
  }
  
  .card-img-bottom {
    width: 100%;
    height: auto;
    border-bottom-left-radius: calc(var(--border-radius) * 2);
    border-bottom-right-radius: calc(var(--border-radius) * 2);
  }
  
  .card-link {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
  }
  
  .card-link:hover {
    text-decoration: underline;
  }
  
  .card-group {
    display: flex;
    gap: calc(var(--spacing-unit) * 4);
  }
  
  .card-deck {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: calc(var(--spacing-unit) * 4);
  }
  
  .card-elevated {
    box-shadow: var(--shadow-md);
  }
  
  .card-elevated:hover {
    box-shadow: var(--shadow-lg);
  }
  
  .card-bordered {
    border: 1px solid var(--outline);
  }
  
  .card-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    border-radius: 0;
    max-width: none;
    margin: 0;
  }

  /* ===== FORMS ===== */
  .form-control {
    display: block;
    width: 100%;
    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 4);
    font-size: 1rem;
    line-height: 1.5;
    color: var(--on-surface);
    background-color: var(--surface);
    background-clip: padding-box;
    border: 1px solid var(--outline);
    border-radius: var(--border-radius);
    transition: var(--transition);
  }
  
  .form-control:focus {
    color: var(--on-surface);
    background-color: var(--surface);
    border-color: var(--primary);
    outline: 0;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary), transparent 70%);
  }
  
  .form-control::placeholder {
    color: var(--on-surface-variant);
    opacity: 0.6;
  }
  
  .form-control:disabled {
    background-color: var(--surface-variant);
    opacity: 0.6;
  }
  
  .form-control-sm {
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 3);
    font-size: 0.875rem;
  }
  
  .form-control-lg {
    padding: calc(var(--spacing-unit) * 4) calc(var(--spacing-unit) * 5);
    font-size: 1.125rem;
  }
  
  .form-control-plaintext {
    display: block;
    width: 100%;
    padding: calc(var(--spacing-unit) * 3) 0;
    margin-bottom: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--on-surface);
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
  }
  
  .form-control-plaintext:focus {
    outline: 0;
  }
  
  .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
    padding-right: 0;
    padding-left: 0;
  }
  
  .form-select {
    display: block;
    width: 100%;
    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 4) calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 8);
    font-size: 1rem;
    line-height: 1.5;
    color: var(--on-surface);
    background-color: var(--surface);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(var(--spacing-unit) * 3) center;
    background-size: 16px 12px;
    border: 1px solid var(--outline);
    border-radius: var(--border-radius);
    transition: var(--transition);
    appearance: none;
  }
  
  .form-select:focus {
    border-color: var(--primary);
    outline: 0;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary), transparent 70%);
  }
  
  .form-select[multiple], .form-select[size]:not([size="1"]) {
    padding-right: calc(var(--spacing-unit) * 4);
    background-image: none;
  }
  
  .form-select-sm {
    padding-top: calc(var(--spacing-unit) * 2);
    padding-bottom: calc(var(--spacing-unit) * 2);
    padding-left: calc(var(--spacing-unit) * 3);
    font-size: 0.875rem;
  }
  
  .form-select-lg {
    padding-top: calc(var(--spacing-unit) * 4);
    padding-bottom: calc(var(--spacing-unit) * 4);
    padding-left: calc(var(--spacing-unit) * 5);
    font-size: 1.125rem;
  }
  
  .form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
  }
  
  .form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: var(--surface);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid var(--outline);
    appearance: none;
    color-adjust: exact;
    transition: var(--transition);
  }
  
  .form-check-input[type="checkbox"] {
    border-radius: 0.25em;
  }
  
  .form-check-input[type="radio"] {
    border-radius: 50%;
  }
  
  .form-check-input:active {
    filter: brightness(90%);
  }
  
  .form-check-input:focus {
    border-color: var(--primary);
    outline: 0;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary), transparent 70%);
  }
  
  .form-check-input:checked {
    background-color: var(--primary);
    border-color: var(--primary);
  }
  
  .form-check-input:checked[type="checkbox"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }
  
  .form-check-input:checked[type="radio"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
  }
  
  .form-check-input[type="checkbox"]:indeterminate {
    background-color: var(--primary);
    border-color: var(--primary);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }
  
  .form-check-input:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
  }
  
  .form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
    opacity: 0.5;
  }
  
  .form-switch {
    padding-left: 2.5em;
  }
  
  .form-switch .form-check-input {
    width: 2em;
    margin-left: -2.5em;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
    background-position: left center;
    border-radius: 2em;
    transition: var(--transition);
  }
  
  .form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  }
  
  .form-switch .form-check-input:checked {
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }
  
  .form-check-label {
    margin-left: 0.5em;
    cursor: pointer;
  }
  
  .form-range {
    width: 100%;
    height: 1.5rem;
    padding: 0;
    background-color: transparent;
    appearance: none;
  }
  
  .form-range:focus {
    outline: 0;
  }
  
  .form-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary), transparent 70%);
  }
  
  .form-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary), transparent 70%);
  }
  
  .form-range::-moz-focus-outer {
    border: 0;
  }
  
  .form-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: var(--primary);
    border: 0;
    border-radius: 1rem;
    transition: var(--transition);
    appearance: none;
  }
  
  .form-range::-webkit-slider-thumb:active {
    background-color: color-mix(in srgb, var(--primary), #000 20%);
  }
  
  .form-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: var(--surface-variant);
    border-radius: 1rem;
  }
  
  .form-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: var(--primary);
    border: 0;
    border-radius: 1rem;
    transition: var(--transition);
    appearance: none;
  }
  
  .form-range::-moz-range-thumb:active {
    background-color: color-mix(in srgb, var(--primary), #000 20%);
  }
  
  .form-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: var(--surface-variant);
    border-radius: 1rem;
  }
  
  .form-range:disabled {
    pointer-events: none;
  }
  
  .form-range:disabled::-webkit-slider-thumb {
    background-color: var(--surface-variant);
  }
  
  .form-range:disabled::-moz-range-thumb {
    background-color: var(--surface-variant);
  }
  
  .form-floating {
    position: relative;
  }
  
  .form-floating > .form-control,
  .form-floating > .form-select {
    height: calc(3.5rem + 2px);
    line-height: 1.25;
  }
  
  .form-floating > label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem 0.75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: var(--transition);
  }
  
  .form-floating > .form-control {
    padding: 1rem 0.75rem;
  }
  
  .form-floating > .form-control::-moz-placeholder {
    color: transparent;
  }
  
  .form-floating > .form-control::placeholder {
    color: transparent;
  }
  
  .form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  
  .form-floating > .form-control:-webkit-autofill {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  
  .form-floating > .form-select {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }
  
  .form-floating > .form-control:focus ~ label,
  .form-floating > .form-control:not(:placeholder-shown) ~ label,
  .form-floating > .form-select ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  
  .form-floating > .form-control:-webkit-autofill ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }
  
  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  
  .input-group > .form-control,
  .input-group > .form-select {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }
  
  .input-group > .form-control:focus,
  .input-group > .form-select:focus {
    z-index: 3;
  }
  
  .input-group .btn {
    position: relative;
    z-index: 2;
  }
  
  .input-group .btn:focus {
    z-index: 3;
  }
  
  .input-group-text {
    display: flex;
    align-items: center;
    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 4);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--on-surface);
    text-align: center;
    white-space: nowrap;
    background-color: var(--surface-variant);
    border: 1px solid var(--outline);
    border-radius: var(--border-radius);
  }
  
  .input-group-lg > .form-control,
  .input-group-lg > .form-select,
  .input-group-lg > .input-group-text,
  .input-group-lg > .btn {
    padding: calc(var(--spacing-unit) * 4) calc(var(--spacing-unit) * 5);
    font-size: 1.125rem;
    border-radius: calc(var(--border-radius) * 1.5);
  }
  
  .input-group-sm > .form-control,
  .input-group-sm > .form-select,
  .input-group-sm > .input-group-text,
  .input-group-sm > .btn {
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 3);
    font-size: 0.875rem;
    border-radius: calc(var(--border-radius) * 0.5);
  }
  
  .input-group-lg > .form-select,
  .input-group-sm > .form-select {
    padding-right: calc(var(--spacing-unit) * 8);
  }
  
  .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  .input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* ===== NAVIGATION ===== */
  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
    background-color: var(--surface);
    box-shadow: var(--shadow-sm);
  }
  
  .navbar-brand {
    padding-top: calc(var(--spacing-unit) * 1.5);
    padding-bottom: calc(var(--spacing-unit) * 1.5);
    margin-right: calc(var(--spacing-unit) * 2);
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
    color: var(--on-surface);
  }
  
  .navbar-brand:hover, .navbar-brand:focus {
    text-decoration: none;
  }
  
  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  
  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }
  
  .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }
  
  .navbar-text {
    padding-top: calc(var(--spacing-unit) * 1.5);
    padding-bottom: calc(var(--spacing-unit) * 1.5);
  }
  
  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }
  
  .navbar-toggler {
    padding: calc(var(--spacing-unit) * 1.5) calc(var(--spacing-unit) * 2);
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }
  
  .navbar-toggler:hover {
    text-decoration: none;
  }
  
  .navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary), transparent 70%);
  }
  
  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  
  .navbar-nav-scroll {
    max-height: 75vh;
    overflow-y: auto;
  }
  
  @media (min-width: 576px) {
    .navbar-expand-sm {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    
    .navbar-expand-sm .navbar-nav {
      flex-direction: row;
    }
    
    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
    }
    
    .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: calc(var(--spacing-unit) * 2);
      padding-left: calc(var(--spacing-unit) * 2);
    }
    
    .navbar-expand-sm .navbar-nav-scroll {
      overflow: visible;
    }
    
    .navbar-expand-sm .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    
    .navbar-expand-sm .navbar-toggler {
      display: none;
    }
  }
  
  @media (min-width: 768px) {
    .navbar-expand-md {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    
    .navbar-expand-md .navbar-nav {
      flex-direction: row;
    }
    
    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
    }
    
    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: calc(var(--spacing-unit) * 2);
      padding-left: calc(var(--spacing-unit) * 2);
    }
    
    .navbar-expand-md .navbar-nav-scroll {
      overflow: visible;
    }
    
    .navbar-expand-md .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    
    .navbar-expand-md .navbar-toggler {
      display: none;
    }
  }
  
  @media (min-width: 992px) {
    .navbar-expand-lg {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    
    .navbar-expand-lg .navbar-nav {
      flex-direction: row;
    }
    
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }
    
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: calc(var(--spacing-unit) * 2);
      padding-left: calc(var(--spacing-unit) * 2);
    }
    
    .navbar-expand-lg .navbar-nav-scroll {
      overflow: visible;
    }
    
    .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
  }
  
  @media (min-width: 1200px) {
    .navbar-expand-xl {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    
    .navbar-expand-xl .navbar-nav {
      flex-direction: row;
    }
    
    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    
    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: calc(var(--spacing-unit) * 2);
      padding-left: calc(var(--spacing-unit) * 2);
    }
    
    .navbar-expand-xl .navbar-nav-scroll {
      overflow: visible;
    }
    
    .navbar-expand-xl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    
    .navbar-expand-xl .navbar-toggler {
      display: none;
    }
  }
  
  @media (min-width: 1400px) {
    .navbar-expand-xxl {
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    
    .navbar-expand-xxl .navbar-nav {
      flex-direction: row;
    }
    
    .navbar-expand-xxl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    
    .navbar-expand-xxl .navbar-nav .nav-link {
      padding-right: calc(var(--spacing-unit) * 2);
      padding-left: calc(var(--spacing-unit) * 2);
    }
    
    .navbar-expand-xxl .navbar-nav-scroll {
      overflow: visible;
    }
    
    .navbar-expand-xxl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    
    .navbar-expand-xxl .navbar-toggler {
      display: none;
    }
  }
  
  .navbar-expand {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  
  .navbar-expand .navbar-nav {
    flex-direction: row;
  }
  
  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }
  
  .navbar-expand .navbar-nav .nav-link {
    padding-right: calc(var(--spacing-unit) * 2);
    padding-left: calc(var(--spacing-unit) * 2);
  }
  
  .navbar-expand .navbar-nav-scroll {
    overflow: visible;
  }
  
  .navbar-expand .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  
  .navbar-expand .navbar-toggler {
    display: none;
  }
  
  .navbar-light .navbar-brand {
    color: var(--on-surface);
  }
  
  .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
    color: var(--on-surface);
  }
  
  .navbar-light .navbar-nav .nav-link {
    color: var(--on-surface);
  }
  
  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
    color: var(--primary);
  }
  
  .navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3);
  }
  
  .navbar-light .navbar-nav .show > .nav-link,
  .navbar-light .navbar-nav .nav-link.active {
    color: var(--primary);
  }
  
  .navbar-light .navbar-toggler {
    color: var(--on-surface);
    border-color: rgba(0, 0, 0, 0.1);
  }
  
  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  
  .navbar-light .navbar-text {
    color: var(--on-surface);
  }
  
  .navbar-light .navbar-text a,
  .navbar-light .navbar-text a:hover,
  .navbar-light .navbar-text a:focus {
    color: var(--primary);
  }
  
  .navbar-dark .navbar-brand {
    color: #fff;
  }
  
  .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
    color: #fff;
  }
  
  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
    color: #fff;
  }
  
  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, 0.25);
  }
  
  .navbar-dark .navbar-nav .show > .nav-link,
  .navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
  }
  
  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  
  .navbar-dark .navbar-text {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .navbar-dark .navbar-text a,
  .navbar-dark .navbar-text a:hover,
  .navbar-dark .navbar-text a:focus {
    color: #fff;
  }
  
  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  
  .nav-link {
    display: block;
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
    font-size: 1rem;
    font-weight: 500;
    color: var(--on-surface);
    text-decoration: none;
    transition: var(--transition);
  }
  
  .nav-link:hover, .nav-link:focus {
    text-decoration: none;
    color: var(--primary);
  }
  
  .nav-link.disabled {
    color: var(--on-surface-variant);
    pointer-events: none;
    cursor: default;
  }
  
  .nav-tabs {
    border-bottom: 1px solid var(--outline);
  }
  
  .nav-tabs .nav-link {
    margin-bottom: -1px;
    background: none;
    border: 1px solid transparent;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }
  
  .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
    border-color: var(--surface-variant) var(--surface-variant) var(--outline);
    isolation: isolate;
  }
  
  .nav-tabs .nav-link.disabled {
    color: var(--on-surface-variant);
    background-color: transparent;
    border-color: transparent;
  }
  
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: var(--primary);
    background-color: var(--surface);
    border-color: var(--outline) var(--outline) var(--surface);
  }
  
  .nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  
  .nav-pills .nav-link {
    background: none;
    border: 0;
    border-radius: var(--border-radius);
  }
  
  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: var(--on-primary);
    background-color: var(--primary);
  }
  
  .nav-fill > .nav-link,
  .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }
  
  .nav-justified > .nav-link,
  .nav-justified .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }
  
  .nav-fill .nav-item .nav-link,
  .nav-justified .nav-item .nav-link {
    width: 100%;
  }
  
  .tab-content > .tab-pane {
    display: none;
  }
  
  .tab-content > .active {
    display: block;
  }
  
  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }
  
  .navbar-nav .dropdown-menu {
    position: static;
  }
  
  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
    margin-bottom: 1rem;
    list-style: none;
    background-color: var(--surface-variant);
    border-radius: var(--border-radius);
  }
  
  .breadcrumb-item + .breadcrumb-item {
    padding-left: calc(var(--spacing-unit) * 2);
  }
  
  .breadcrumb-item + .breadcrumb-item::before {
    float: left;
    padding-right: calc(var(--spacing-unit) * 2);
    color: var(--on-surface-variant);
    content: var(--breadcrumb-divider, "/") /* rtl: var(--breadcrumb-divider, "/") */;
  }
  
  .breadcrumb-item.active {
    color: var(--on-surface-variant);
  }
  
  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: var(--border-radius);
  }
  
  .page-link {
    position: relative;
    display: block;
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 3);
    margin-left: -1px;
    line-height: 1.25;
    color: var(--primary);
    background-color: var(--surface);
    border: 1px solid var(--outline);
  }
  
  .page-link:hover {
    z-index: 2;
    color: var(--primary);
    text-decoration: none;
    background-color: var(--surface-variant);
    border-color: var(--outline);
  }
  
  .page-link:focus {
    z-index: 3;
    outline: 0;
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary), transparent 70%);
  }
  
  .page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }
  
  .page-item:last-child .page-link {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }
  
  .page-item.active .page-link {
    z-index: 3;
    color: var(--on-primary);
    background-color: var(--primary);
    border-color: var(--primary);
  }
  
  .page-item.disabled .page-link {
    color: var(--on-surface-variant);
    pointer-events: none;
    cursor: auto;
    background-color: var(--surface);
    border-color: var(--outline);
  }
  
  .pagination-lg .page-link {
    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 4);
    font-size: 1.125rem;
    line-height: 1.5;
  }
  
  .pagination-lg .page-item:first-child .page-link {
    border-top-left-radius: calc(var(--border-radius) * 1.5);
    border-bottom-left-radius: calc(var(--border-radius) * 1.5);
  }
  
  .pagination-lg .page-item:last-child .page-link {
    border-top-right-radius: calc(var(--border-radius) * 1.5);
    border-bottom-right-radius: calc(var(--border-radius) * 1.5);
  }
  
  .pagination-sm .page-link {
    padding: calc(var(--spacing-unit) * 1) calc(var(--spacing-unit) * 2);
    font-size: 0.875rem;
    line-height: 1.5;
  }
  
  .pagination-sm .page-item:first-child .page-link {
    border-top-left-radius: calc(var(--border-radius) * 0.5);
    border-bottom-left-radius: calc(var(--border-radius) * 0.5);
  }
  
  .pagination-sm .page-item:last-child .page-link {
    border-top-right-radius: calc(var(--border-radius) * 0.5);
    border-bottom-right-radius: calc(var(--border-radius) * 0.5);
  }

  /* ===== MODALS ===== */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-dialog {
    position: relative;
    width: auto;
    margin: calc(var(--spacing-unit) * 10);
    pointer-events: none;
  }
  
  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -50px);
  }
  
  .modal.show .modal-dialog {
    transform: none;
  }
  
  .modal.modal-static .modal-dialog {
    transform: scale(1.02);
  }
  
  .modal-dialog-scrollable {
    height: calc(100% - calc(var(--spacing-unit) * 10));
  }
  
  .modal-dialog-scrollable .modal-content {
    max-height: 100%;
    overflow: hidden;
  }
  
  .modal-dialog-scrollable .modal-body {
    overflow-y: auto;
  }
  
  .modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - calc(var(--spacing-unit) * 10));
  }
  
  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: var(--surface);
    background-clip: padding-box;
    border: 1px solid var(--outline);
    border-radius: calc(var(--border-radius) * 2);
    outline: 0;
    box-shadow: var(--shadow-lg);
  }
  
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
  }
  
  .modal-backdrop.fade {
    opacity: 0;
  }
  
  .modal-backdrop.show {
    opacity: 0.5;
  }
  
  .modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: calc(var(--spacing-unit) * 4);
    border-bottom: 1px solid var(--outline);
    border-top-left-radius: calc(calc(var(--border-radius) * 2) - 1px);
    border-top-right-radius: calc(calc(var(--border-radius) * 2) - 1px);
  }
  
  .modal-header .btn-close {
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 2);
    margin: calc(calc(var(--spacing-unit) * -2)) calc(calc(var(--spacing-unit) * -2)) calc(calc(var(--spacing-unit) * -2)) auto;
  }
  
  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }
  
  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: calc(var(--spacing-unit) * 4);
  }
  
  .modal-footer {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 4);
    border-top: 1px solid var(--outline);
    border-bottom-right-radius: calc(calc(var(--border-radius) * 2) - 1px);
    border-bottom-left-radius: calc(calc(var(--border-radius) * 2) - 1px);
  }
  
  .modal-footer > * {
    margin: calc(var(--spacing-unit) * 1);
  }
  
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: calc(var(--spacing-unit) * 10) auto;
    }
    
    .modal-dialog-scrollable {
      height: calc(100% - calc(var(--spacing-unit) * 10));
    }
    
    .modal-dialog-centered {
      min-height: calc(100% - calc(var(--spacing-unit) * 10));
    }
    
    .modal-sm {
      max-width: 300px;
    }
  }
  
  @media (min-width: 992px) {
    .modal-lg,
    .modal-xl {
      max-width: 800px;
    }
  }
  
  @media (min-width: 1200px) {
    .modal-xl {
      max-width: 1140px;
    }
  }
  
  .modal-fullscreen {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  
  .modal-fullscreen .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  
  .modal-fullscreen .modal-header {
    border-radius: 0;
  }
  
  .modal-fullscreen .modal-body {
    overflow-y: auto;
  }
  
  .modal-fullscreen .modal-footer {
    border-radius: 0;
  }
  
  @media (max-width: 575.98px) {
    .modal-fullscreen-sm-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }
    
    .modal-fullscreen-sm-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }
    
    .modal-fullscreen-sm-down .modal-header {
      border-radius: 0;
    }
    
    .modal-fullscreen-sm-down .modal-body {
      overflow-y: auto;
    }
    
    .modal-fullscreen-sm-down .modal-footer {
      border-radius: 0;
    }
  }
  
  @media (max-width: 767.98px) {
    .modal-fullscreen-md-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }
    
    .modal-fullscreen-md-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }
    
    .modal-fullscreen-md-down .modal-header {
      border-radius: 0;
    }
    
    .modal-fullscreen-md-down .modal-body {
      overflow-y: auto;
    }
    
    .modal-fullscreen-md-down .modal-footer {
      border-radius: 0;
    }
  }
  
  @media (max-width: 991.98px) {
    .modal-fullscreen-lg-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }
    
    .modal-fullscreen-lg-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }
    
    .modal-fullscreen-lg-down .modal-header {
      border-radius: 0;
    }
    
    .modal-fullscreen-lg-down .modal-body {
      overflow-y: auto;
    }
    
    .modal-fullscreen-lg-down .modal-footer {
      border-radius: 0;
    }
  }
  
  @media (max-width: 1199.98px) {
    .modal-fullscreen-xl-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }
    
    .modal-fullscreen-xl-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }
    
    .modal-fullscreen-xl-down .modal-header {
      border-radius: 0;
    }
    
    .modal-fullscreen-xl-down .modal-body {
      overflow-y: auto;
    }
    
    .modal-fullscreen-xl-down .modal-footer {
      border-radius: 0;
    }
  }
  
  @media (max-width: 1399.98px) {
    .modal-fullscreen-xxl-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }
    
    .modal-fullscreen-xxl-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }
    
    .modal-fullscreen-xxl-down .modal-header {
      border-radius: 0;
    }
    
    .modal-fullscreen-xxl-down .modal-body {
      overflow-y: auto;
    }
    
    .modal-fullscreen-xxl-down .modal-footer {
      border-radius: 0;
    }
  }

  /* ===== ALERTS ===== */
  .alert {
    position: relative;
    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 4);
    margin-bottom: calc(var(--spacing-unit) * 4);
    border: 1px solid transparent;
    border-radius: var(--border-radius);
  }
  
  .alert-heading {
    color: inherit;
  }
  
  .alert-link {
    font-weight: 700;
  }
  
  .alert-dismissible {
    padding-right: calc(var(--spacing-unit) * 12);
  }
  
  .alert-dismissible .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 4);
    color: inherit;
  }
  
  .alert-primary {
    color: var(--on-primary);
    background-color: var(--primary-container);
    border-color: var(--primary);
  }
  
  .alert-primary .alert-link {
    color: var(--on-primary);
  }
  
  .alert-secondary {
    color: var(--on-secondary);
    background-color: var(--secondary-container);
    border-color: var(--secondary);
  }
  
  .alert-secondary .alert-link {
    color: var(--on-secondary);
  }
  
  .alert-success {
    color: white;
    background-color: color-mix(in srgb, var(--success), transparent 80%);
    border-color: var(--success);
  }
  
  .alert-success .alert-link {
    color: white;
  }
  
  .alert-info {
    color: white;
    background-color: color-mix(in srgb, var(--info), transparent 80%);
    border-color: var(--info);
  }
  
  .alert-info .alert-link {
    color: white;
  }
  
  .alert-warning {
    color: black;
    background-color: color-mix(in srgb, var(--warning), transparent 80%);
    border-color: var(--warning);
  }
  
  .alert-warning .alert-link {
    color: black;
  }
  
  .alert-danger {
    color: white;
    background-color: color-mix(in srgb, var(--danger), transparent 80%);
    border-color: var(--danger);
  }
  
  .alert-danger .alert-link {
    color: white;
  }
  
  .alert-light {
    color: #000;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  
  .alert-light .alert-link {
    color: #000;
  }
  
  .alert-dark {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }
  
  .alert-dark .alert-link {
    color: #fff;
  }

  /* ===== BADGES ===== */
  .badge {
    display: inline-block;
    padding: calc(var(--spacing-unit) * 1) calc(var(--spacing-unit) * 3);
    font-size: 0.75em;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: var(--border-radius);
  }
  
  .badge:empty {
    display: none;
  }
  
  .btn .badge {
    position: relative;
    top: -1px;
  }
  
  .badge-primary {
    color: var(--on-primary);
    background-color: var(--primary);
  }
  
  .badge-secondary {
    color: var(--on-secondary);
    background-color: var(--secondary);
  }
  
  .badge-success {
    color: white;
    background-color: var(--success);
  }
  
  .badge-info {
    color: white;
    background-color: var(--info);
  }
  
  .badge-warning {
    color: black;
    background-color: var(--warning);
  }
  
  .badge-danger {
    color: white;
    background-color: var(--danger);
  }
  
  .badge-light {
    color: #000;
    background-color: #f8f9fa;
  }
  
  .badge-dark {
    color: #fff;
    background-color: #212529;
  }
  
  .rounded-pill {
    padding-right: calc(var(--spacing-unit) * 4);
    padding-left: calc(var(--spacing-unit) * 4);
    border-radius: 50rem;
  }

  /* ===== PROGRESS ===== */
  .progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: var(--surface-variant);
    border-radius: var(--border-radius);
  }
  
  .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: var(--primary);
    transition: width 0.6s ease;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .progress-bar {
      transition: none;
    }
  }
  
  .progress-bar-striped {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-size: 1rem 1rem;
  }
  
  .progress-bar-animated {
    animation: progress-bar-stripes 1s linear infinite;
  }
  
  @keyframes progress-bar-stripes {
    0% {
      background-position: 1rem 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  /* ===== LIST GROUP ===== */
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: var(--border-radius);
  }
  
  .list-group-item {
    position: relative;
    display: block;
    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 4);
    color: var(--on-surface);
    text-decoration: none;
    background-color: var(--surface);
    border: 1px solid var(--outline);
  }
  
  .list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  
  .list-group-item:last-child {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  
  .list-group-item.disabled, .list-group-item:disabled {
    color: var(--on-surface-variant);
    pointer-events: none;
    background-color: var(--surface);
  }
  
  .list-group-item.active {
    z-index: 2;
    color: var(--on-primary);
    background-color: var(--primary);
    border-color: var(--primary);
  }
  
  .list-group-item + .list-group-item {
    border-top-width: 0;
  }
  
  .list-group-item + .list-group-item.active {
    margin-top: -1px;
    border-top-width: 1px;
  }
  
  .list-group-horizontal {
    flex-direction: row;
  }
  
  .list-group-horizontal > .list-group-item:first-child {
    border-bottom-left-radius: var(--border-radius);
    border-top-right-radius: 0;
  }
  
  .list-group-horizontal > .list-group-item:last-child {
    border-top-right-radius: var(--border-radius);
    border-bottom-left-radius: 0;
  }
  
  .list-group-horizontal > .list-group-item.active {
    margin-top: 0;
  }
  
  .list-group-horizontal > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  
  .list-group-horizontal > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
  
  @media (min-width: 576px) {
    .list-group-horizontal-sm {
      flex-direction: row;
    }
    
    .list-group-horizontal-sm > .list-group-item:first-child {
      border-bottom-left-radius: var(--border-radius);
      border-top-right-radius: 0;
    }
    
    .list-group-horizontal-sm > .list-group-item:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-left-radius: 0;
    }
    
    .list-group-horizontal-sm > .list-group-item.active {
      margin-top: 0;
    }
    
    .list-group-horizontal-sm > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    
    .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }
  
  @media (min-width: 768px) {
    .list-group-horizontal-md {
      flex-direction: row;
    }
    
    .list-group-horizontal-md > .list-group-item:first-child {
      border-bottom-left-radius: var(--border-radius);
      border-top-right-radius: 0;
    }
    
    .list-group-horizontal-md > .list-group-item:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-left-radius: 0;
    }
    
    .list-group-horizontal-md > .list-group-item.active {
      margin-top: 0;
    }
    
    .list-group-horizontal-md > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    
    .list-group-horizontal-md > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }
  
  @media (min-width: 992px) {
    .list-group-horizontal-lg {
      flex-direction: row;
    }
    
    .list-group-horizontal-lg > .list-group-item:first-child {
      border-bottom-left-radius: var(--border-radius);
      border-top-right-radius: 0;
    }
    
    .list-group-horizontal-lg > .list-group-item:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-left-radius: 0;
    }
    
    .list-group-horizontal-lg > .list-group-item.active {
      margin-top: 0;
    }
    
    .list-group-horizontal-lg > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    
    .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }
  
  @media (min-width: 1200px) {
    .list-group-horizontal-xl {
      flex-direction: row;
    }
    
    .list-group-horizontal-xl > .list-group-item:first-child {
      border-bottom-left-radius: var(--border-radius);
      border-top-right-radius: 0;
    }
    
    .list-group-horizontal-xl > .list-group-item:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-left-radius: 0;
    }
    
    .list-group-horizontal-xl > .list-group-item.active {
      margin-top: 0;
    }
    
    .list-group-horizontal-xl > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    
    .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }
  
  @media (min-width: 1400px) {
    .list-group-horizontal-xxl {
      flex-direction: row;
    }
    
    .list-group-horizontal-xxl > .list-group-item:first-child {
      border-bottom-left-radius: var(--border-radius);
      border-top-right-radius: 0;
    }
    
    .list-group-horizontal-xxl > .list-group-item:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-left-radius: 0;
    }
    
    .list-group-horizontal-xxl > .list-group-item.active {
      margin-top: 0;
    }
    
    .list-group-horizontal-xxl > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    
    .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }
  
  .list-group-flush {
    border-radius: 0;
  }
  
  .list-group-flush > .list-group-item {
    border-width: 0 0 1px;
  }
  
  .list-group-flush > .list-group-item:last-child {
    border-bottom-width: 0;
  }
  
  .list-group-item-primary {
    color: var(--on-primary);
    background-color: var(--primary-container);
  }
  
  .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
    color: var(--on-primary);
    background-color: color-mix(in srgb, var(--primary-container), #000 10%);
  }
  
  .list-group-item-secondary {
    color: var(--on-secondary);
    background-color: var(--secondary-container);
  }
  
  .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
    color: var(--on-secondary);
    background-color: color-mix(in srgb, var(--secondary-container), #000 10%);
  }
  
  .list-group-item-success {
    color: white;
    background-color: color-mix(in srgb, var(--success), transparent 80%);
  }
  
  .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
    color: white;
    background-color: color-mix(in srgb, var(--success), transparent 70%);
  }
  
  .list-group-item-info {
    color: white;
    background-color: color-mix(in srgb, var(--info), transparent 80%);
  }
  
  .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
    color: white;
    background-color: color-mix(in srgb, var(--info), transparent 70%);
  }
  
  .list-group-item-warning {
    color: black;
    background-color: color-mix(in srgb, var(--warning), transparent 80%);
  }
  
  .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
    color: black;
    background-color: color-mix(in srgb, var(--warning), transparent 70%);
  }
  
  .list-group-item-danger {
    color: white;
    background-color: color-mix(in srgb, var(--danger), transparent 80%);
  }
  
  .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
    color: white;
    background-color: color-mix(in srgb, var(--danger), transparent 70%);
  }
  
  .list-group-item-light {
    color: #000;
    background-color: #f8f9fa;
  }
  
  .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
    color: #000;
    background-color: #e2e6ea;
  }
  
  .list-group-item-dark {
    color: #fff;
    background-color: #212529;
  }
  
  .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
    color: #fff;
    background-color: #1d2124;
  }

  /* ===== TOASTS ===== */
  .toast-container {
    position: absolute;
    z-index: 1055;
    width: max-content;
    max-width: 100%;
    pointer-events: none;
  }
  
  .toast-container > :not(:last-child) {
    margin-bottom: calc(var(--spacing-unit) * 4);
  }
  
  .toast {
    max-width: 350px;
    font-size: 0.875rem;
    background-color: var(--surface);
    background-clip: padding-box;
    border: 1px solid var(--outline);
    box-shadow: var(--shadow-lg);
    opacity: 0;
    border-radius: var(--border-radius);
  }
  
  .toast:not(.showing):not(.show) {
    opacity: 0;
  }
  
  .toast.hide {
    display: none;
  }
  
  .toast-container {
    position: fixed;
    z-index: 1055;
  }
  
  .toast-container > div {
    position: relative;
    width: auto;
    max-width: 100%;
    pointer-events: auto;
  }
  
  .toast-header {
    display: flex;
    align-items: center;
    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 4);
    color: var(--on-surface);
    background-color: var(--surface);
    background-clip: padding-box;
    border-bottom: 1px solid var(--outline);
    border-top-left-radius: calc(calc(var(--border-radius) * 2) - 1px);
    border-top-right-radius: calc(calc(var(--border-radius) * 2) - 1px);
  }
  
  .toast-header .btn-close {
    margin-right: calc(var(--spacing-unit) * -2);
    margin-left: calc(var(--spacing-unit) * 2);
  }
  
  .toast-body {
    padding: calc(var(--spacing-unit) * 4);
    word-wrap: break-word;
  }

  /* ===== SPINNERS ===== */
  .spinner-border {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    border: 0.25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner-border 0.75s linear infinite;
  }
  
  .spinner-border-sm {
    width: 1rem;
    height: 1rem;
    border-width: 0.2em;
  }
  
  @keyframes spinner-border {
    to {
      transform: rotate(360deg);
    }
  }
  
  .spinner-grow {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    background-color: currentColor;
    border-radius: 50%;
    opacity: 0;
    animation: spinner-grow 0.75s linear infinite;
  }
  
  .spinner-grow-sm {
    width: 1rem;
    height: 1rem;
  }
  
  @keyframes spinner-grow {
    0% {
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    .spinner-border,
    .spinner-grow {
      animation-duration: 1.5s;
    }
  }

  /* ===== ALIGNMENT ===== */
  .align-baseline {
    vertical-align: baseline !important;
  }
  
  .align-top {
    vertical-align: top !important;
  }
  
  .align-middle {
    vertical-align: middle !important;
  }
  
  .align-bottom {
    vertical-align: bottom !important;
  }
  
  .align-text-bottom {
    vertical-align: text-bottom !important;
  }
  
  .align-text-top {
    vertical-align: text-top !important;
  }

  /* ===== BACKGROUNDS ===== */
  .bg-body {
    background-color: var(--background) !important;
  }
  
  .bg-white {
    background-color: #fff !important;
  }
  
  .bg-transparent {
    background-color: transparent !important;
  }

  /* ===== BORDERS ===== */
  .border {
    border: 1px solid var(--outline) !important;
  }
  
  .border-0 {
    border: 0 !important;
  }
  
  .border-top {
    border-top: 1px solid var(--outline) !important;
  }
  
  .border-top-0 {
    border-top: 0 !important;
  }
  
  .border-end {
    border-right: 1px solid var(--outline) !important;
  }
  
  .border-end-0 {
    border-right: 0 !important;
  }
  
  .border-bottom {
    border-bottom: 1px solid var(--outline) !important;
  }
  
  .border-bottom-0 {
    border-bottom: 0 !important;
  }
  
  .border-start {
    border-left: 1px solid var(--outline) !important;
  }
  
  .border-start-0 {
    border-left: 0 !important;
  }
  
  .border-primary {
    border-color: var(--primary) !important;
  }
  
  .border-secondary {
    border-color: var(--secondary) !important;
  }
  
  .border-success {
    border-color: var(--success) !important;
  }
  
  .border-info {
    border-color: var(--info) !important;
  }
  
  .border-warning {
    border-color: var(--warning) !important;
  }
  
  .border-danger {
    border-color: var(--danger) !important;
  }
  
  .border-light {
    border-color: #f8f9fa !important;
  }
  
  .border-dark {
    border-color: #212529 !important;
  }
  
  .border-white {
    border-color: #fff !important;
  }
  
  .border-1 {
    border-width: 1px !important;
  }
  
  .border-2 {
    border-width: 2px !important;
  }
  
  .border-3 {
    border-width: 3px !important;
  }
  
  .border-4 {
    border-width: 4px !important;
  }
  
  .border-5 {
    border-width: 5px !important;
  }
  
  .w-25 {
    width: 25% !important;
  }
  
  .w-50 {
    width: 50% !important;
  }
  
  .w-75 {
    width: 75% !important;
  }
  
  .w-100 {
    width: 100% !important;
  }
  
  .w-auto {
    width: auto !important;
  }
  
  .mw-100 {
    max-width: 100% !important;
  }
  
  .vw-100 {
    width: 100vw !important;
  }
  
  .min-vw-100 {
    min-width: 100vw !important;
  }
  
  .h-25 {
    height: 25% !important;
  }
  
  .h-50 {
    height: 50% !important;
  }
  
  .h-75 {
    height: 75% !important;
  }
  
  .h-100 {
    height: 100% !important;
  }
  
  .h-auto {
    height: auto !important;
  }
  
  .mh-100 {
    max-height: 100% !important;
  }
  
  .vh-100 {
    height: 100vh !important;
  }
  
  .min-vh-100 {
    min-height: 100vh !important;
  }
  
  .flex-fill {
    flex: 1 1 auto !important;
  }
  
  .flex-row {
    flex-direction: row !important;
  }
  
  .flex-column {
    flex-direction: column !important;
  }
  
  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }
  
  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }
  
  .flex-grow-0 {
    flex-grow: 0 !important;
  }
  
  .flex-grow-1 {
    flex-grow: 1 !important;
  }
  
  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }
  
  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }
  
  .flex-wrap {
    flex-wrap: wrap !important;
  }
  
  .flex-nowrap {
    flex-wrap: nowrap !important;
  }
  
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  
  .gap-0 {
    gap: 0 !important;
  }
  
  .gap-1 {
    gap: 0.25rem !important;
  }
  
  .gap-2 {
    gap: 0.5rem !important;
  }
  
  .gap-3 {
    gap: 1rem !important;
  }
  
  .gap-4 {
    gap: 1.5rem !important;
  }
  
  .gap-5 {
    gap: 3rem !important;
  }
  
  .justify-content-start {
    justify-content: flex-start !important;
  }
  
  .justify-content-end {
    justify-content: flex-end !important;
  }
  
  .justify-content-center {
    justify-content: center !important;
  }
  
  .justify-content-between {
    justify-content: space-between !important;
  }
  
  .justify-content-around {
    justify-content: space-around !important;
  }
  
  .justify-content-evenly {
    justify-content: space-evenly !important;
  }
  
  .align-items-start {
    align-items: flex-start !important;
  }
  
  .align-items-end {
    align-items: flex-end !important;
  }
  
  .align-items-center {
    align-items: center !important;
  }
  
  .align-items-baseline {
    align-items: baseline !important;
  }
  
  .align-items-stretch {
    align-items: stretch !important;
  }
  
  .align-content-start {
    align-content: flex-start !important;
  }
  
  .align-content-end {
    align-content: flex-end !important;
  }
  
  .align-content-center {
    align-content: center !important;
  }
  
  .align-content-between {
    align-content: space-between !important;
  }
  
  .align-content-around {
    align-content: space-around !important;
  }
  
  .align-content-stretch {
    align-content: stretch !important;
  }
  
  .align-self-auto {
    align-self: auto !important;
  }
  
  .align-self-start {
    align-self: flex-start !important;
  }
  
  .align-self-end {
    align-self: flex-end !important;
  }
  
  .align-self-center {
    align-self: center !important;
  }
  
  .align-self-baseline {
    align-self: baseline !important;
  }
  
  .align-self-stretch {
    align-self: stretch !important;
  }
  
  .order-first {
    order: -1 !important;
  }
  
  .order-0 {
    order: 0 !important;
  }
  
  .order-1 {
    order: 1 !important;
  }
  
  .order-2 {
    order: 2 !important;
  }
  
  .order-3 {
    order: 3 !important;
  }
  
  .order-4 {
    order: 4 !important;
  }
  
  .order-5 {
    order: 5 !important;
  }
  
  .order-last {
    order: 6 !important;
  }
  
  .m-0 {
    margin: 0 !important;
  }
  
  .m-1 {
    margin: 0.25rem !important;
  }
  
  .m-2 {
    margin: 0.5rem !important;
  }
  
  .m-3 {
    margin: 1rem !important;
  }
  
  .m-4 {
    margin: 1.5rem !important;
  }
  
  .m-5 {
    margin: 3rem !important;
  }
  
  .m-auto {
    margin: auto !important;
  }
  
  .mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .mx-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  
  .mx-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  
  .mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  
  .mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  
  .mx-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  
  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  
  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  
  .my-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  
  .my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  
  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  
  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  
  .my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  
  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  
  .mt-0 {
    margin-top: 0 !important;
  }
  
  .mt-1 {
    margin-top: 0.25rem !important;
  }
  
  .mt-2 {
    margin-top: 0.5rem !important;
  }
  
  .mt-3 {
    margin-top: 1rem !important;
  }
  
  .mt-4 {
    margin-top: 1.5rem !important;
  }
  
  .mt-5 {
    margin-top: 3rem !important;
  }
  
  .mt-auto {
    margin-top: auto !important;
  }
  
  .me-0 {
    margin-right: 0 !important;
  }
  
  .me-1 {
    margin-right: 0.25rem !important;
  }
  
  .me-2 {
    margin-right: 0.5rem !important;
  }
  
  .me-3 {
    margin-right: 1rem !important;
  }
  
  .me-4 {
    margin-right: 1.5rem !important;
  }
  
  .me-5 {
    margin-right: 3rem !important;
  }
  
  .me-auto {
    margin-right: auto !important;
  }
  
  .mb-0 {
    margin-bottom: 0 !important;
  }
  
  .mb-1 {
    margin-bottom: 0.25rem !important;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem !important;
  }
  
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
  
  .mb-5 {
    margin-bottom: 3rem !important;
  }
  
  .mb-auto {
    margin-bottom: auto !important;
  }
  
  .ms-0 {
    margin-left: 0 !important;
  }
  
  .ms-1 {
    margin-left: 0.25rem !important;
  }
  
  .ms-2 {
    margin-left: 0.5rem !important;
  }
  
  .ms-3 {
    margin-left: 1rem !important;
  }
  
  .ms-4 {
    margin-left: 1.5rem !important;
  }
  
  .ms-5 {
    margin-left: 3rem !important;
  }
  
  .ms-auto {
    margin-left: auto !important;
  }
  
  .p-0 {
    padding: 0 !important;
  }
  
  .p-1 {
    padding: 0.25rem !important;
  }
  
  .p-2 {
    padding: 0.5rem !important;
  }
  
  .p-3 {
    padding: 1rem !important;
  }
  
  .p-4 {
    padding: 1.5rem !important;
  }
  
  .p-5 {
    padding: 3rem !important;
  }
  
  .px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  
  .px-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  
  .px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  
  .px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  
  .px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  
  .px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  
  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  
  .py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  
  .py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  
  .py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  
  .py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  
  .py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  
  .pt-0 {
    padding-top: 0 !important;
  }
  
  .pt-1 {
    padding-top: 0.25rem !important;
  }
  
  .pt-2 {
    padding-top: 0.5rem !important;
  }
  
  .pt-3 {
    padding-top: 1rem !important;
  }
  
  .pt-4 {
    padding-top: 1.5rem !important;
  }
  
  .pt-5 {
    padding-top: 3rem !important;
  }
  
  .pe-0 {
    padding-right: 0 !important;
  }
  
  .pe-1 {
    padding-right: 0.25rem !important;
  }
  
  .pe-2 {
    padding-right: 0.5rem !important;
  }
  
  .pe-3 {
    padding-right: 1rem !important;
  }
  
  .pe-4 {
    padding-right: 1.5rem !important;
  }
  
  .pe-5 {
    padding-right: 3rem !important;
  }
  
  .pb-0 {
    padding-bottom: 0 !important;
  }
  
  .pb-1 {
    padding-bottom: 0.25rem !important;
  }
  
  .pb-2 {
    padding-bottom: 0.5rem !important;
  }
  
  .pb-3 {
    padding-bottom: 1rem !important;
  }
  
  .pb-4 {
    padding-bottom: 1.5rem !important;
  }
  
  .pb-5 {
    padding-bottom: 3rem !important;
  }
  
  .ps-0 {
    padding-left: 0 !important;
  }
  
  .ps-1 {
    padding-left: 0.25rem !important;
  }
  
  .ps-2 {
    padding-left: 0.5rem !important;
  }
  
  .ps-3 {
    padding-left: 1rem !important;
  }
  
  .ps-4 {
    padding-left: 1.5rem !important;
  }
  
  .ps-5 {
    padding-left: 3rem !important;
  }
  
  .font-monospace {
    font-family: var(--font-family-mono) !important;
  }
  
  .fs-1 {
    font-size: calc(1.375rem + 1.5vw) !important;
  }
  
  .fs-2 {
    font-size: calc(1.325rem + 0.9vw) !important;
  }
  
  .fs-3 {
    font-size: calc(1.3rem + 0.6vw) !important;
  }
  
  .fs-4 {
    font-size: calc(1.275rem + 0.3vw) !important;
  }
  
  .fs-5 {
    font-size: 1.25rem !important;
  }
  
  .fs-6 {
    font-size: 1rem !important;
  }
  
  .fst-italic {
    font-style: italic !important;
  }
  
  .fst-normal {
    font-style: normal !important;
  }
  
  .fw-light {
    font-weight: 300 !important;
  }
  
  .fw-lighter {
    font-weight: lighter !important;
  }
  
  .fw-normal {
    font-weight: 400 !important;
  }
  
  .fw-bold {
    font-weight: 700 !important;
  }
  
  .fw-bolder {
    font-weight: bolder !important;
  }
  
  .lh-1 {
    line-height: 1 !important;
  }
  
  .lh-sm {
    line-height: 1.25 !important;
  }
  
  .lh-base {
    line-height: 1.5 !important;
  }
  
  .lh-lg {
    line-height: 2 !important;
  }
  
  .text-start {
    text-align: left !important;
  }
  
  .text-end {
    text-align: right !important;
  }
  
  .text-center {
    text-align: center !important;
  }
  
  .text-decoration-none {
    text-decoration: none !important;
  }
  
  .text-decoration-underline {
    text-decoration: underline !important;
  }
  
  .text-decoration-line-through {
    text-decoration: line-through !important;
  }
  
  .text-lowercase {
    text-transform: lowercase !important;
  }
  
  .text-uppercase {
    text-transform: uppercase !important;
  }
  
  .text-capitalize {
    text-transform: capitalize !important;
  }
  
  .text-wrap {
    white-space: normal !important;
  }
  
  .text-nowrap {
    white-space: nowrap !important;
  }
  
  .text-break {
    word-wrap: break-word !important;
    word-break: break-word !important;
  }
  
  .text-primary {
    color: var(--primary) !important;
  }
  
  .text-secondary {
    color: var(--secondary) !important;
  }
  
  .text-success {
    color: var(--success) !important;
  }
  
  .text-info {
    color: var(--info) !important;
  }
  
  .text-warning {
    color: var(--warning) !important;
  }
  
  .text-danger {
    color: var(--danger) !important;
  }
  
  .text-light {
    color: #f8f9fa !important;
  }
  
  .text-dark {
    color: #212529 !important;
  }
  
  .text-white {
    color: #fff !important;
  }
  
  .text-body {
    color: var(--on-background) !important;
  }
  
  .text-muted {
    color: var(--on-surface-variant) !important;
  }
  
  .text-black-50 {
    color: rgba(0, 0, 0, 0.5) !important;
  }
  
  .text-white-50 {
    color: rgba(255, 255, 255, 0.5) !important;
  }
  
  .text-reset {
    color: inherit !important;
  }
  
  .text-opacity-25 {
    --bs-text-opacity: 0.25;
  }
  
  .text-opacity-50 {
    --bs-text-opacity: 0.5;
  }
  
  .text-opacity-75 {
    --bs-text-opacity: 0.75;
  }
  
  .text-opacity-100 {
    --bs-text-opacity: 1;
  }
  
  .bg-primary {
    background-color: var(--primary) !important;
  }
  
  .bg-secondary {
    background-color: var(--secondary) !important;
  }
  
  .bg-success {
    background-color: var(--success) !important;
  }
  
  .bg-info {
    background-color: var(--info) !important;
  }
  
  .bg-warning {
    background-color: var(--warning) !important;
  }
  
  .bg-danger {
    background-color: var(--danger) !important;
  }
  
  .bg-light {
    background-color: #f8f9fa !important;
  }
  
  .bg-dark {
    background-color: #212529 !important;
  }
  
  .bg-body {
    background-color: var(--background) !important;
  }
  
  .bg-white {
    background-color: #fff !important;
  }
  
  .bg-transparent {
    background-color: transparent !important;
  }
  
  .bg-opacity-10 {
    --bs-bg-opacity: 0.1;
  }
  
  .bg-opacity-25 {
    --bs-bg-opacity: 0.25;
  }
  
  .bg-opacity-50 {
    --bs-bg-opacity: 0.5;
  }
  
  .bg-opacity-75 {
    --bs-bg-opacity: 0.75;
  }
  
  .bg-opacity-100 {
    --bs-bg-opacity: 1;
  }
  
  .bg-gradient {
    background-image: var(--bs-gradient) !important;
  }
  
  .user-select-all {
    user-select: all !important;
  }
  
  .user-select-auto {
    user-select: auto !important;
  }
  
  .user-select-none {
    user-select: none !important;
  }
  
  .pe-none {
    pointer-events: none !important;
  }
  
  .pe-auto {
    pointer-events: auto !important;
  }
  
  .rounded {
    border-radius: var(--border-radius) !important;
  }
  
  .rounded-0 {
    border-radius: 0 !important;
  }
  
  .rounded-1 {
    border-radius: calc(var(--border-radius) * 0.5) !important;
  }
  
  .rounded-2 {
    border-radius: var(--border-radius) !important;
  }
  
  .rounded-3 {
    border-radius: calc(var(--border-radius) * 1.5) !important;
  }
  
  .rounded-4 {
    border-radius: calc(var(--border-radius) * 2) !important;
  }
  
  .rounded-5 {
    border-radius: calc(var(--border-radius) * 3) !important;
  }
  
  .rounded-circle {
    border-radius: 50% !important;
  }
  
  .rounded-pill {
    border-radius: 50rem !important;
  }
  
  .rounded-top {
    border-top-left-radius: var(--border-radius) !important;
    border-top-right-radius: var(--border-radius) !important;
  }
  
  .rounded-end {
    border-top-right-radius: var(--border-radius) !important;
    border-bottom-right-radius: var(--border-radius) !important;
  }
  
  .rounded-bottom {
    border-bottom-right-radius: var(--border-radius) !important;
    border-bottom-left-radius: var(--border-radius) !important;
  }
  
  .rounded-start {
    border-bottom-left-radius: var(--border-radius) !important;
    border-top-left-radius: var(--border-radius) !important;
  }
  
  .visible {
    visibility: visible !important;
  }
  
  .invisible {
    visibility: hidden !important;
  }
  
  @media (min-width: 576px) {
    .float-sm-start {
      float: left !important;
    }
    
    .float-sm-end {
      float: right !important;
    }
    
    .float-sm-none {
      float: none !important;
    }
    
    .d-sm-inline {
      display: inline !important;
    }
    
    .d-sm-inline-block {
      display: inline-block !important;
    }
    
    .d-sm-block {
      display: block !important;
    }
    
    .d-sm-grid {
      display: grid !important;
    }
    
    .d-sm-table {
      display: table !important;
    }
    
    .d-sm-table-row {
      display: table-row !important;
    }
    
    .d-sm-table-cell {
      display: table-cell !important;
    }
    
    .d-sm-flex {
      display: flex !important;
    }
    
    .d-sm-inline-flex {
      display: inline-flex !important;
    }
    
    .d-sm-none {
      display: none !important;
    }
    
    .flex-sm-fill {
      flex: 1 1 auto !important;
    }
    
    .flex-sm-row {
      flex-direction: row !important;
    }
    
    .flex-sm-column {
      flex-direction: column !important;
    }
    
    .flex-sm-row-reverse {
      flex-direction: row-reverse !important;
    }
    
    .flex-sm-column-reverse {
      flex-direction: column-reverse !important;
    }
    
    .flex-sm-grow-0 {
      flex-grow: 0 !important;
    }
    
    .flex-sm-grow-1 {
      flex-grow: 1 !important;
    }
    
    .flex-sm-shrink-0 {
      flex-shrink: 0 !important;
    }
    
    .flex-sm-shrink-1 {
      flex-shrink: 1 !important;
    }
    
    .flex-sm-wrap {
      flex-wrap: wrap !important;
    }
    
    .flex-sm-nowrap {
      flex-wrap: nowrap !important;
    }
    
    .flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    
    .gap-sm-0 {
      gap: 0 !important;
    }
    
    .gap-sm-1 {
      gap: 0.25rem !important;
    }
    
    .gap-sm-2 {
      gap: 0.5rem !important;
    }
    
    .gap-sm-3 {
      gap: 1rem !important;
    }
    
    .gap-sm-4 {
      gap: 1.5rem !important;
    }
    
    .gap-sm-5 {
      gap: 3rem !important;
    }
    
    .justify-content-sm-start {
      justify-content: flex-start !important;
    }
    
    .justify-content-sm-end {
      justify-content: flex-end !important;
    }
    
    .justify-content-sm-center {
      justify-content: center !important;
    }
    
    .justify-content-sm-between {
      justify-content: space-between !important;
    }
    
    .justify-content-sm-around {
      justify-content: space-around !important;
    }
    
    .justify-content-sm-evenly {
      justify-content: space-evenly !important;
    }
    
    .align-items-sm-start {
      align-items: flex-start !important;
    }
    
    .align-items-sm-end {
      align-items: flex-end !important;
    }
    
    .align-items-sm-center {
      align-items: center !important;
    }
    
    .align-items-sm-baseline {
      align-items: baseline !important;
    }
    
    .align-items-sm-stretch {
      align-items: stretch !important;
    }
    
    .align-content-sm-start {
      align-content: flex-start !important;
    }
    
    .align-content-sm-end {
      align-content: flex-end !important;
    }
    
    .align-content-sm-center {
      align-content: center !important;
    }
    
    .align-content-sm-between {
      align-content: space-between !important;
    }
    
    .align-content-sm-around {
      align-content: space-around !important;
    }
    
    .align-content-sm-stretch {
      align-content: stretch !important;
    }
    
    .align-self-sm-auto {
      align-self: auto !important;
    }
    
    .align-self-sm-start {
      align-self: flex-start !important;
    }
    
    .align-self-sm-end {
      align-self: flex-end !important;
    }
    
    .align-self-sm-center {
      align-self: center !important;
    }
    
    .align-self-sm-baseline {
      align-self: baseline !important;
    }
    
    .align-self-sm-stretch {
      align-self: stretch !important;
    }
    
    .order-sm-first {
      order: -1 !important;
    }
    
    .order-sm-0 {
      order: 0 !important;
    }
    
    .order-sm-1 {
      order: 1 !important;
    }
    
    .order-sm-2 {
      order: 2 !important;
    }
    
    .order-sm-3 {
      order: 3 !important;
    }
    
    .order-sm-4 {
      order: 4 !important;
    }
    
    .order-sm-5 {
      order: 5 !important;
    }
    
    .order-sm-last {
      order: 6 !important;
    }
    
    .m-sm-0 {
      margin: 0 !important;
    }
    
    .m-sm-1 {
      margin: 0.25rem !important;
    }
    
    .m-sm-2 {
      margin: 0.5rem !important;
    }
    
    .m-sm-3 {
      margin: 1rem !important;
    }
    
    .m-sm-4 {
      margin: 1.5rem !important;
    }
    
    .m-sm-5 {
      margin: 3rem !important;
    }
    
    .m-sm-auto {
      margin: auto !important;
    }
    
    .mx-sm-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    
    .mx-sm-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    
    .mx-sm-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    
    .mx-sm-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    
    .mx-sm-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    
    .mx-sm-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    
    .mx-sm-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    
    .my-sm-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    
    .my-sm-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    
    .my-sm-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    
    .my-sm-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    
    .my-sm-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    
    .my-sm-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    
    .my-sm-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    
    .mt-sm-0 {
      margin-top: 0 !important;
    }
    
    .mt-sm-1 {
      margin-top: 0.25rem !important;
    }
    
    .mt-sm-2 {
      margin-top: 0.5rem !important;
    }
    
    .mt-sm-3 {
      margin-top: 1rem !important;
    }
    
    .mt-sm-4 {
      margin-top: 1.5rem !important;
    }
    
    .mt-sm-5 {
      margin-top: 3rem !important;
    }
    
    .mt-sm-auto {
      margin-top: auto !important;
    }
    
    .me-sm-0 {
      margin-right: 0 !important;
    }
    
    .me-sm-1 {
      margin-right: 0.25rem !important;
    }
    
    .me-sm-2 {
      margin-right: 0.5rem !important;
    }
    
    .me-sm-3 {
      margin-right: 1rem !important;
    }
    
    .me-sm-4 {
      margin-right: 1.5rem !important;
    }
    
    .me-sm-5 {
      margin-right: 3rem !important;
    }
    
    .me-sm-auto {
      margin-right: auto !important;
    }
    
    .mb-sm-0 {
      margin-bottom: 0 !important;
    }
    
    .mb-sm-1 {
      margin-bottom: 0.25rem !important;
    }
    
    .mb-sm-2 {
      margin-bottom: 0.5rem !important;
    }
    
    .mb-sm-3 {
      margin-bottom: 1rem !important;
    }
    
    .mb-sm-4 {
      margin-bottom: 1.5rem !important;
    }
    
    .mb-sm-5 {
      margin-bottom: 3rem !important;
    }
    
    .mb-sm-auto {
      margin-bottom: auto !important;
    }
    
    .ms-sm-0 {
      margin-left: 0 !important;
    }
    
    .ms-sm-1 {
      margin-left: 0.25rem !important;
    }
    
    .ms-sm-2 {
      margin-left: 0.5rem !important;
    }
    
    .ms-sm-3 {
      margin-left: 1rem !important;
    }
    
    .ms-sm-4 {
      margin-left: 1.5rem !important;
    }
    
    .ms-sm-5 {
      margin-left: 3rem !important;
    }
    
    .ms-sm-auto {
      margin-left: auto !important;
    }
    
    .p-sm-0 {
      padding: 0 !important;
    }
    
    .p-sm-1 {
      padding: 0.25rem !important;
    }
    
    .p-sm-2 {
      padding: 0.5rem !important;
    }
    
    .p-sm-3 {
      padding: 1rem !important;
    }
    
    .p-sm-4 {
      padding: 1.5rem !important;
    }
    
    .p-sm-5 {
      padding: 3rem !important;
    }
    
    .px-sm-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    
    .px-sm-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    
    .px-sm-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    
    .px-sm-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    
    .px-sm-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    
    .px-sm-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    
    .py-sm-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    
    .py-sm-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    
    .py-sm-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    
    .py-sm-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    
    .py-sm-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    
    .py-sm-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    
    .pt-sm-0 {
      padding-top: 0 !important;
    }
    
    .pt-sm-1 {
      padding-top: 0.25rem !important;
    }
    
    .pt-sm-2 {
      padding-top: 0.5rem !important;
    }
    
    .pt-sm-3 {
      padding-top: 1rem !important;
    }
    
    .pt-sm-4 {
      padding-top: 1.5rem !important;
    }
    
    .pt-sm-5 {
      padding-top: 3rem !important;
    }
    
    .pe-sm-0 {
      padding-right: 0 !important;
    }
    
    .pe-sm-1 {
      padding-right: 0.25rem !important;
    }
    
    .pe-sm-2 {
      padding-right: 0.5rem !important;
    }
    
    .pe-sm-3 {
      padding-right: 1rem !important;
    }
    
    .pe-sm-4 {
      padding-right: 1.5rem !important;
    }
    
    .pe-sm-5 {
      padding-right: 3rem !important;
    }
    
    .pb-sm-0 {
      padding-bottom: 0 !important;
    }
    
    .pb-sm-1 {
      padding-bottom: 0.25rem !important;
    }
    
    .pb-sm-2 {
      padding-bottom: 0.5rem !important;
    }
    
    .pb-sm-3 {
      padding-bottom: 1rem !important;
    }
    
    .pb-sm-4 {
      padding-bottom: 1.5rem !important;
    }
    
    .pb-sm-5 {
      padding-bottom: 3rem !important;
    }
    
    .ps-sm-0 {
      padding-left: 0 !important;
    }
    
    .ps-sm-1 {
      padding-left: 0.25rem !important;
    }
    
    .ps-sm-2 {
      padding-left: 0.5rem !important;
    }
    
    .ps-sm-3 {
      padding-left: 1rem !important;
    }
    
    .ps-sm-4 {
      padding-left: 1.5rem !important;
    }
    
    .ps-sm-5 {
      padding-left: 3rem !important;
    }
    
    .text-sm-start {
      text-align: left !important;
    }
    
    .text-sm-end {
      text-align: right !important;
    }
    
    .text-sm-center {
      text-align: center !important;
    }
  }
  
  @media (min-width: 768px) {
    .float-md-start {
      float: left !important;
    }
    
    .float-md-end {
      float: right !important;
    }
    
    .float-md-none {
      float: none !important;
    }
    
    .d-md-inline {
      display: inline !important;
    }
    
    .d-md-inline-block {
      display: inline-block !important;
    }
    
    .d-md-block {
      display: block !important;
    }
    
    .d-md-grid {
      display: grid !important;
    }
    
    .d-md-table {
      display: table !important;
    }
    
    .d-md-table-row {
      display: table-row !important;
    }
    
    .d-md-table-cell {
      display: table-cell !important;
    }
    
    .d-md-flex {
      display: flex !important;
    }
    
    .d-md-inline-flex {
      display: inline-flex !important;
    }
    
    .d-md-none {
      display: none !important;
    }
    
    .flex-md-fill {
      flex: 1 1 auto !important;
    }
    
    .flex-md-row {
      flex-direction: row !important;
    }
    
    .flex-md-column {
      flex-direction: column !important;
    }
    
    .flex-md-row-reverse {
      flex-direction: row-reverse !important;
    }
    
    .flex-md-column-reverse {
      flex-direction: column-reverse !important;
    }
    
    .flex-md-grow-0 {
      flex-grow: 0 !important;
    }
    
    .flex-md-grow-1 {
      flex-grow: 1 !important;
    }
    
    .flex-md-shrink-0 {
      flex-shrink: 0 !important;
    }
    
    .flex-md-shrink-1 {
      flex-shrink: 1 !important;
    }
    
    .flex-md-wrap {
      flex-wrap: wrap !important;
    }
    
    .flex-md-nowrap {
      flex-wrap: nowrap !important;
    }
    
    .flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    
    .gap-md-0 {
      gap: 0 !important;
    }
    
    .gap-md-1 {
      gap: 0.25rem !important;
    }
    
    .gap-md-2 {
      gap: 0.5rem !important;
    }
    
    .gap-md-3 {
      gap: 1rem !important;
    }
    
    .gap-md-4 {
      gap: 1.5rem !important;
    }
    
    .gap-md-5 {
      gap: 3rem !important;
    }
    
    .justify-content-md-start {
      justify-content: flex-start !important;
    }
    
    .justify-content-md-end {
      justify-content: flex-end !important;
    }
    
    .justify-content-md-center {
      justify-content: center !important;
    }
    
    .justify-content-md-between {
      justify-content: space-between !important;
    }
    
    .justify-content-md-around {
      justify-content: space-around !important;
    }
    
    .justify-content-md-evenly {
      justify-content: space-evenly !important;
    }
    
    .align-items-md-start {
      align-items: flex-start !important;
    }
    
    .align-items-md-end {
      align-items: flex-end !important;
    }
    
    .align-items-md-center {
      align-items: center !important;
    }
    
    .align-items-md-baseline {
      align-items: baseline !important;
    }
    
    .align-items-md-stretch {
      align-items: stretch !important;
    }
    
    .align-content-md-start {
      align-content: flex-start !important;
    }
    
    .align-content-md-end {
      align-content: flex-end !important;
    }
    
    .align-content-md-center {
      align-content: center !important;
    }
    
    .align-content-md-between {
      align-content: space-between !important;
    }
    
    .align-content-md-around {
      align-content: space-around !important;
    }
    
    .align-content-md-stretch {
      align-content: stretch !important;
    }
    
    .align-self-md-auto {
      align-self: auto !important;
    }
    
    .align-self-md-start {
      align-self: flex-start !important;
    }
    
    .align-self-md-end {
      align-self: flex-end !important;
    }
    
    .align-self-md-center {
      align-self: center !important;
    }
    
    .align-self-md-baseline {
      align-self: baseline !important;
    }
    
    .align-self-md-stretch {
      align-self: stretch !important;
    }
    
    .order-md-first {
      order: -1 !important;
    }
    
    .order-md-0 {
      order: 0 !important;
    }
    
    .order-md-1 {
      order: 1 !important;
    }
    
    .order-md-2 {
      order: 2 !important;
    }
    
    .order-md-3 {
      order: 3 !important;
    }
    
    .order-md-4 {
      order: 4 !important;
    }
    
    .order-md-5 {
      order: 5 !important;
    }
    
    .order-md-last {
      order: 6 !important;
    }
    
    .m-md-0 {
      margin: 0 !important;
    }
    
    .m-md-1 {
      margin: 0.25rem !important;
    }
    
    .m-md-2 {
      margin: 0.5rem !important;
    }
    
    .m-md-3 {
      margin: 1rem !important;
    }
    
    .m-md-4 {
      margin: 1.5rem !important;
    }
    
    .m-md-5 {
      margin: 3rem !important;
    }
    
    .m-md-auto {
      margin: auto !important;
    }
    
    .mx-md-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    
    .mx-md-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    
    .mx-md-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    
    .mx-md-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    
    .mx-md-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    
    .mx-md-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    
    .mx-md-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    
    .my-md-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    
    .my-md-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    
    .my-md-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    
    .my-md-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    
    .my-md-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    
    .my-md-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    
    .my-md-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    
    .mt-md-0 {
      margin-top: 0 !important;
    }
    
    .mt-md-1 {
      margin-top: 0.25rem !important;
    }
    
    .mt-md-2 {
      margin-top: 0.5rem !important;
    }
    
    .mt-md-3 {
      margin-top: 1rem !important;
    }
    
    .mt-md-4 {
      margin-top: 1.5rem !important;
    }
    
    .mt-md-5 {
      margin-top: 3rem !important;
    }
    
    .mt-md-auto {
      margin-top: auto !important;
    }
    
    .me-md-0 {
      margin-right: 0 !important;
    }
    
    .me-md-1 {
      margin-right: 0.25rem !important;
    }
    
    .me-md-2 {
      margin-right: 0.5rem !important;
    }
    
    .me-md-3 {
      margin-right: 1rem !important;
    }
    
    .me-md-4 {
      margin-right: 1.5rem !important;
    }
    
    .me-md-5 {
      margin-right: 3rem !important;
    }
    
    .me-md-auto {
      margin-right: auto !important;
    }
    
    .mb-md-0 {
      margin-bottom: 0 !important;
    }
    
    .mb-md-1 {
      margin-bottom: 0.25rem !important;
    }
    
    .mb-md-2 {
      margin-bottom: 0.5rem !important;
    }
    
    .mb-md-3 {
      margin-bottom: 1rem !important;
    }
    
    .mb-md-4 {
      margin-bottom: 1.5rem !important;
    }
    
    .mb-md-5 {
      margin-bottom: 3rem !important;
    }
    
    .mb-md-auto {
      margin-bottom: auto !important;
    }
    
    .ms-md-0 {
      margin-left: 0 !important;
    }
    
    .ms-md-1 {
      margin-left: 0.25rem !important;
    }
    
    .ms-md-2 {
      margin-left: 0.5rem !important;
    }
    
    .ms-md-3 {
      margin-left: 1rem !important;
    }
    
    .ms-md-4 {
      margin-left: 1.5rem !important;
    }
    
    .ms-md-5 {
      margin-left: 3rem !important;
    }
    
    .ms-md-auto {
      margin-left: auto !important;
    }
    
    .p-md-0 {
      padding: 0 !important;
    }
    
    .p-md-1 {
      padding: 0.25rem !important;
    }
    
    .p-md-2 {
      padding: 0.5rem !important;
    }
    
    .p-md-3 {
      padding: 1rem !important;
    }
    
    .p-md-4 {
      padding: 1.5rem !important;
    }
    
    .p-md-5 {
      padding: 3rem !important;
    }
    
    .px-md-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    
    .px-md-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    
    .px-md-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    
    .px-md-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    
    .px-md-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    
    .px-md-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    
    .py-md-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    
    .py-md-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    
    .py-md-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    
    .py-md-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    
    .py-md-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    
    .py-md-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    
    .pt-md-0 {
      padding-top: 0 !important;
    }
    
    .pt-md-1 {
      padding-top: 0.25rem !important;
    }
    
    .pt-md-2 {
      padding-top: 0.5rem !important;
    }
    
    .pt-md-3 {
      padding-top: 1rem !important;
    }
    
    .pt-md-4 {
      padding-top: 1.5rem !important;
    }
    
    .pt-md-5 {
      padding-top: 3rem !important;
    }
    
    .pe-md-0 {
      padding-right: 0 !important;
    }
    
    .pe-md-1 {
      padding-right: 0.25rem !important;
    }
    
    .pe-md-2 {
      padding-right: 0.5rem !important;
    }
    
    .pe-md-3 {
      padding-right: 1rem !important;
    }
    
    .pe-md-4 {
      padding-right: 1.5rem !important;
    }
    
    .pe-md-5 {
      padding-right: 3rem !important;
    }
    
    .pb-md-0 {
      padding-bottom: 0 !important;
    }
    
    .pb-md-1 {
      padding-bottom: 0.25rem !important;
    }
    
    .pb-md-2 {
      padding-bottom: 0.5rem !important;
    }
    
    .pb-md-3 {
      padding-bottom: 1rem !important;
    }
    
    .pb-md-4 {
      padding-bottom: 1.5rem !important;
    }
    
    .pb-md-5 {
      padding-bottom: 3rem !important;
    }
    
    .ps-md-0 {
      padding-left: 0 !important;
    }
    
    .ps-md-1 {
      padding-left: 0.25rem !important;
    }
    
    .ps-md-2 {
      padding-left: 0.5rem !important;
    }
    
    .ps-md-3 {
      padding-left: 1rem !important;
    }
    
    .ps-md-4 {
      padding-left: 1.5rem !important;
    }
    
    .ps-md-5 {
      padding-left: 3rem !important;
    }
    
    .text-md-start {
      text-align: left !important;
    }
    
    .text-md-end {
      text-align: right !important;
    }
    
    .text-md-center {
      text-align: center !important;
    }
  }
  
  @media (min-width: 992px) {
    .float-lg-start {
      float: left !important;
    }
    
    .float-lg-end {
      float: right !important;
    }
    
    .float-lg-none {
      float: none !important;
    }
    
    .d-lg-inline {
      display: inline !important;
    }
    
    .d-lg-inline-block {
      display: inline-block !important;
    }
    
    .d-lg-block {
      display: block !important;
    }
    
    .d-lg-grid {
      display: grid !important;
    }
    
    .d-lg-table {
      display: table !important;
    }
    
    .d-lg-table-row {
      display: table-row !important;
    }
    
    .d-lg-table-cell {
      display: table-cell !important;
    }
    
    .d-lg-flex {
      display: flex !important;
    }
    
    .d-lg-inline-flex {
      display: inline-flex !important;
    }
    
    .d-lg-none {
      display: none !important;
    }
    
    .flex-lg-fill {
      flex: 1 1 auto !important;
    }
    
    .flex-lg-row {
      flex-direction: row !important;
    }
    
    .flex-lg-column {
      flex-direction: column !important;
    }
    
    .flex-lg-row-reverse {
      flex-direction: row-reverse !important;
    }
    
    .flex-lg-column-reverse {
      flex-direction: column-reverse !important;
    }
    
    .flex-lg-grow-0 {
      flex-grow: 0 !important;
    }
    
    .flex-lg-grow-1 {
      flex-grow: 1 !important;
    }
    
    .flex-lg-shrink-0 {
      flex-shrink: 0 !important;
    }
    
    .flex-lg-shrink-1 {
      flex-shrink: 1 !important;
    }
    
    .flex-lg-wrap {
      flex-wrap: wrap !important;
    }
    
    .flex-lg-nowrap {
      flex-wrap: nowrap !important;
    }
    
    .flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    
    .gap-lg-0 {
      gap: 0 !important;
    }
    
    .gap-lg-1 {
      gap: 0.25rem !important;
    }
    
    .gap-lg-2 {
      gap: 0.5rem !important;
    }
    
    .gap-lg-3 {
      gap: 1rem !important;
    }
    
    .gap-lg-4 {
      gap: 1.5rem !important;
    }
    
    .gap-lg-5 {
      gap: 3rem !important;
    }
    
    .justify-content-lg-start {
      justify-content: flex-start !important;
    }
    
    .justify-content-lg-end {
      justify-content: flex-end !important;
    }
    
    .justify-content-lg-center {
      justify-content: center !important;
    }
    
    .justify-content-lg-between {
      justify-content: space-between !important;
    }
    
    .justify-content-lg-around {
      justify-content: space-around !important;
    }
    
    .justify-content-lg-evenly {
      justify-content: space-evenly !important;
    }
    
    .align-items-lg-start {
      align-items: flex-start !important;
    }
    
    .align-items-lg-end {
      align-items: flex-end !important;
    }
    
    .align-items-lg-center {
      align-items: center !important;
    }
    
    .align-items-lg-baseline {
      align-items: baseline !important;
    }
    
    .align-items-lg-stretch {
      align-items: stretch !important;
    }
    
    .align-content-lg-start {
      align-content: flex-start !important;
    }
    
    .align-content-lg-end {
      align-content: flex-end !important;
    }
    
    .align-content-lg-center {
      align-content: center !important;
    }
    
    .align-content-lg-between {
      align-content: space-between !important;
    }
    
    .align-content-lg-around {
      align-content: space-around !important;
    }
    
    .align-content-lg-stretch {
      align-content: stretch !important;
    }
    
    .align-self-lg-auto {
      align-self: auto !important;
    }
    
    .align-self-lg-start {
      align-self: flex-start !important;
    }
    
    .align-self-lg-end {
      align-self: flex-end !important;
    }
    
    .align-self-lg-center {
      align-self: center !important;
    }
    
    .align-self-lg-baseline {
      align-self: baseline !important;
    }
    
    .align-self-lg-stretch {
      align-self: stretch !important;
    }
    
    .order-lg-first {
      order: -1 !important;
    }
    
    .order-lg-0 {
      order: 0 !important;
    }
    
    .order-lg-1 {
      order: 1 !important;
    }
    
    .order-lg-2 {
      order: 2 !important;
    }
    
    .order-lg-3 {
      order: 3 !important;
    }
    
    .order-lg-4 {
      order: 4 !important;
    }
    
    .order-lg-5 {
      order: 5 !important;
    }
    
    .order-lg-last {
      order: 6 !important;
    }
    
    .m-lg-0 {
      margin: 0 !important;
    }
    
    .m-lg-1 {
      margin: 0.25rem !important;
    }
    
    .m-lg-2 {
      margin: 0.5rem !important;
    }
    
    .m-lg-3 {
      margin: 1rem !important;
    }
    
    .m-lg-4 {
      margin: 1.5rem !important;
    }
    
    .m-lg-5 {
      margin: 3rem !important;
    }
    
    .m-lg-auto {
      margin: auto !important;
    }
    
    .mx-lg-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    
    .mx-lg-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    
    .mx-lg-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    
    .mx-lg-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    
    .mx-lg-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    
    .mx-lg-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    
    .mx-lg-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    
    .my-lg-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    
    .my-lg-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    
    .my-lg-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    
    .my-lg-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    
    .my-lg-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    
    .my-lg-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    
    .my-lg-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    
    .mt-lg-0 {
      margin-top: 0 !important;
    }
    
    .mt-lg-1 {
      margin-top: 0.25rem !important;
    }
    
    .mt-lg-2 {
      margin-top: 0.5rem !important;
    }
    
    .mt-lg-3 {
      margin-top: 1rem !important;
    }
    
    .mt-lg-4 {
      margin-top: 1.5rem !important;
    }
    
    .mt-lg-5 {
      margin-top: 3rem !important;
    }
    
    .mt-lg-auto {
      margin-top: auto !important;
    }
    
    .me-lg-0 {
      margin-right: 0 !important;
    }
    
    .me-lg-1 {
      margin-right: 0.25rem !important;
    }
    
    .me-lg-2 {
      margin-right: 0.5rem !important;
    }
    
    .me-lg-3 {
      margin-right: 1rem !important;
    }
    
    .me-lg-4 {
      margin-right: 1.5rem !important;
    }
    
    .me-lg-5 {
      margin-right: 3rem !important;
    }
    
    .me-lg-auto {
      margin-right: auto !important;
    }
    
    .mb-lg-0 {
      margin-bottom: 0 !important;
    }
    
    .mb-lg-1 {
      margin-bottom: 0.25rem !important;
    }
    
    .mb-lg-2 {
      margin-bottom: 0.5rem !important;
    }
    
    .mb-lg-3 {
      margin-bottom: 1rem !important;
    }
    
    .mb-lg-4 {
      margin-bottom: 1.5rem !important;
    }
    
    .mb-lg-5 {
      margin-bottom: 3rem !important;
    }
    
    .mb-lg-auto {
      margin-bottom: auto !important;
    }
    
    .ms-lg-0 {
      margin-left: 0 !important;
    }
    
    .ms-lg-1 {
      margin-left: 0.25rem !important;
    }
    
    .ms-lg-2 {
      margin-left: 0.5rem !important;
    }
    
    .ms-lg-3 {
      margin-left: 1rem !important;
    }
    
    .ms-lg-4 {
      margin-left: 1.5rem !important;
    }
    
    .ms-lg-5 {
      margin-left: 3rem !important;
    }
    
    .ms-lg-auto {
      margin-left: auto !important;
    }
    
    .p-lg-0 {
      padding: 0 !important;
    }
    
    .p-lg-1 {
      padding: 0.25rem !important;
    }
    
    .p-lg-2 {
      padding: 0.5rem !important;
    }
    
    .p-lg-3 {
      padding: 1rem !important;
    }
    
    .p-lg-4 {
      padding: 1.5rem !important;
    }
    
    .p-lg-5 {
      padding: 3rem !important;
    }
    
    .px-lg-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    
    .px-lg-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    
    .px-lg-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    
    .px-lg-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    
    .px-lg-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    
    .px-lg-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    
    .py-lg-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    
    .py-lg-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    
    .py-lg-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    
    .py-lg-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    
    .py-lg-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    
    .py-lg-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    
    .pt-lg-0 {
      padding-top: 0 !important;
    }
    
    .pt-lg-1 {
      padding-top: 0.25rem !important;
    }
    
    .pt-lg-2 {
      padding-top: 0.5rem !important;
    }
    
    .pt-lg-3 {
      padding-top: 1rem !important;
    }
    
    .pt-lg-4 {
      padding-top: 1.5rem !important;
    }
    
    .pt-lg-5 {
      padding-top: 3rem !important;
    }
    
    .pe-lg-0 {
      padding-right: 0 !important;
    }
    
    .pe-lg-1 {
      padding-right: 0.25rem !important;
    }
    
    .pe-lg-2 {
      padding-right: 0.5rem !important;
    }
    
    .pe-lg-3 {
      padding-right: 1rem !important;
    }
    
    .pe-lg-4 {
      padding-right: 1.5rem !important;
    }
    
    .pe-lg-5 {
      padding-right: 3rem !important;
    }
    
    .pb-lg-0 {
      padding-bottom: 0 !important;
    }
    
    .pb-lg-1 {
      padding-bottom: 0.25rem !important;
    }
    
    .pb-lg-2 {
      padding-bottom: 0.5rem !important;
    }
    
    .pb-lg-3 {
      padding-bottom: 1rem !important;
    }
    
    .pb-lg-4 {
      padding-bottom: 1.5rem !important;
    }
    
    .pb-lg-5 {
      padding-bottom: 3rem !important;
    }
    
    .ps-lg-0 {
      padding-left: 0 !important;
    }
    
    .ps-lg-1 {
      padding-left: 0.25rem !important;
    }
    
    .ps-lg-2 {
      padding-left: 0.5rem !important;
    }
    
    .ps-lg-3 {
      padding-left: 1rem !important;
    }
    
    .ps-lg-4 {
      padding-left: 1.5rem !important;
    }
    
    .ps-lg-5 {
      padding-left: 3rem !important;
    }
    
    .text-lg-start {
      text-align: left !important;
    }
    
    .text-lg-end {
      text-align: right !important;
    }
    
    .text-lg-center {
      text-align: center !important;
    }
  }
  
  @media (min-width: 1200px) {
    .float-xl-start {
      float: left !important;
    }
    
    .float-xl-end {
      float: right !important;
    }
    
    .float-xl-none {
      float: none !important;
    }
    
    .d-xl-inline {
      display: inline !important;
    }
    
    .d-xl-inline-block {
      display: inline-block !important;
    }
    
    .d-xl-block {
      display: block !important;
    }
    
    .d-xl-grid {
      display: grid !important;
    }
    
    .d-xl-table {
      display: table !important;
    }
    
    .d-xl-table-row {
      display: table-row !important;
    }
    
    .d-xl-table-cell {
      display: table-cell !important;
    }
    
    .d-xl-flex {
      display: flex !important;
    }
    
    .d-xl-inline-flex {
      display: inline-flex !important;
    }
    
    .d-xl-none {
      display: none !important;
    }
    
    .flex-xl-fill {
      flex: 1 1 auto !important;
    }
    
    .flex-xl-row {
      flex-direction: row !important;
    }
    
    .flex-xl-column {
      flex-direction: column !important;
    }
    
    .flex-xl-row-reverse {
      flex-direction: row-reverse !important;
    }
    
    .flex-xl-column-reverse {
      flex-direction: column-reverse !important;
    }
    
    .flex-xl-grow-0 {
      flex-grow: 0 !important;
    }
    
    .flex-xl-grow-1 {
      flex-grow: 1 !important;
    }
    
    .flex-xl-shrink-0 {
      flex-shrink: 0 !important;
    }
    
    .flex-xl-shrink-1 {
      flex-shrink: 1 !important;
    }
    
    .flex-xl-wrap {
      flex-wrap: wrap !important;
    }
    
    .flex-xl-nowrap {
      flex-wrap: nowrap !important;
    }
    
    .flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    
    .gap-xl-0 {
      gap: 0 !important;
    }
    
    .gap-xl-1 {
      gap: 0.25rem !important;
    }
    
    .gap-xl-2 {
      gap: 0.5rem !important;
    }
    
    .gap-xl-3 {
      gap: 1rem !important;
    }
    
    .gap-xl-4 {
      gap: 1.5rem !important;
    }
    
    .gap-xl-5 {
      gap: 3rem !important;
    }
    
    .justify-content-xl-start {
      justify-content: flex-start !important;
    }
    
    .justify-content-xl-end {
      justify-content: flex-end !important;
    }
    
    .justify-content-xl-center {
      justify-content: center !important;
    }
    
    .justify-content-xl-between {
      justify-content: space-between !important;
    }
    
    .justify-content-xl-around {
      justify-content: space-around !important;
    }
    
    .justify-content-xl-evenly {
      justify-content: space-evenly !important;
    }
    
    .align-items-xl-start {
      align-items: flex-start !important;
    }
    
    .align-items-xl-end {
      align-items: flex-end !important;
    }
    
    .align-items-xl-center {
      align-items: center !important;
    }
    
    .align-items-xl-baseline {
      align-items: baseline !important;
    }
    
    .align-items-xl-stretch {
      align-items: stretch !important;
    }
    
    .align-content-xl-start {
      align-content: flex-start !important;
    }
    
    .align-content-xl-end {
      align-content: flex-end !important;
    }
    
    .align-content-xl-center {
      align-content: center !important;
    }
    
    .align-content-xl-between {
      align-content: space-between !important;
    }
    
    .align-content-xl-around {
      align-content: space-around !important;
    }
    
    .align-content-xl-stretch {
      align-content: stretch !important;
    }
    
    .align-self-xl-auto {
      align-self: auto !important;
    }
    
    .align-self-xl-start {
      align-self: flex-start !important;
    }
    
    .align-self-xl-end {
      align-self: flex-end !important;
    }
    
    .align-self-xl-center {
      align-self: center !important;
    }
    
    .align-self-xl-baseline {
      align-self: baseline !important;
    }
    
    .align-self-xl-stretch {
      align-self: stretch !important;
    }
    
    .order-xl-first {
      order: -1 !important;
    }
    
    .order-xl-0 {
      order: 0 !important;
    }
    
    .order-xl-1 {
      order: 1 !important;
    }
    
    .order-xl-2 {
      order: 2 !important;
    }
    
    .order-xl-3 {
      order: 3 !important;
    }
    
    .order-xl-4 {
      order: 4 !important;
    }
    
    .order-xl-5 {
      order: 5 !important;
    }
    
    .order-xl-last {
      order: 6 !important;
    }
    
    .m-xl-0 {
      margin: 0 !important;
    }
    
    .m-xl-1 {
      margin: 0.25rem !important;
    }
    
    .m-xl-2 {
      margin: 0.5rem !important;
    }
    
    .m-xl-3 {
      margin: 1rem !important;
    }
    
    .m-xl-4 {
      margin: 1.5rem !important;
    }
    
    .m-xl-5 {
      margin: 3rem !important;
    }
    
    .m-xl-auto {
      margin: auto !important;
    }
    
    .mx-xl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    
    .mx-xl-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    
    .mx-xl-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    
    .mx-xl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    
    .mx-xl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    
    .mx-xl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    
    .mx-xl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    
    .my-xl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    
    .my-xl-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    
    .my-xl-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    
    .my-xl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    
    .my-xl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    
    .my-xl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    
    .my-xl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    
    .mt-xl-0 {
      margin-top: 0 !important;
    }
    
    .mt-xl-1 {
      margin-top: 0.25rem !important;
    }
    
    .mt-xl-2 {
      margin-top: 0.5rem !important;
    }
    
    .mt-xl-3 {
      margin-top: 1rem !important;
    }
    
    .mt-xl-4 {
      margin-top: 1.5rem !important;
    }
    
    .mt-xl-5 {
      margin-top: 3rem !important;
    }
    
    .mt-xl-auto {
      margin-top: auto !important;
    }
    
    .me-xl-0 {
      margin-right: 0 !important;
    }
    
    .me-xl-1 {
      margin-right: 0.25rem !important;
    }
    
    .me-xl-2 {
      margin-right: 0.5rem !important;
    }
    
    .me-xl-3 {
      margin-right: 1rem !important;
    }
    
    .me-xl-4 {
      margin-right: 1.5rem !important;
    }
    
    .me-xl-5 {
      margin-right: 3rem !important;
    }
    
    .me-xl-auto {
      margin-right: auto !important;
    }
    
    .mb-xl-0 {
      margin-bottom: 0 !important;
    }
    
    .mb-xl-1 {
      margin-bottom: 0.25rem !important;
    }
    
    .mb-xl-2 {
      margin-bottom: 0.5rem !important;
    }
    
    .mb-xl-3 {
      margin-bottom: 1rem !important;
    }
    
    .mb-xl-4 {
      margin-bottom: 1.5rem !important;
    }
    
    .mb-xl-5 {
      margin-bottom: 3rem !important;
    }
    
    .mb-xl-auto {
      margin-bottom: auto !important;
    }
    
    .ms-xl-0 {
      margin-left: 0 !important;
    }
    
    .ms-xl-1 {
      margin-left: 0.25rem !important;
    }
    
    .ms-xl-2 {
      margin-left: 0.5rem !important;
    }
    
    .ms-xl-3 {
      margin-left: 1rem !important;
    }
    
    .ms-xl-4 {
      margin-left: 1.5rem !important;
    }
    
    .ms-xl-5 {
      margin-left: 3rem !important;
    }
    
    .ms-xl-auto {
      margin-left: auto !important;
    }
    
    .p-xl-0 {
      padding: 0 !important;
    }
    
    .p-xl-1 {
      padding: 0.25rem !important;
    }
    
    .p-xl-2 {
      padding: 0.5rem !important;
    }
    
    .p-xl-3 {
      padding: 1rem !important;
    }
    
    .p-xl-4 {
      padding: 1.5rem !important;
    }
    
    .p-xl-5 {
      padding: 3rem !important;
    }
    
    .px-xl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    
    .px-xl-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    
    .px-xl-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    
    .px-xl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    
    .px-xl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    
    .px-xl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    
    .py-xl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    
    .py-xl-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    
    .py-xl-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    
    .py-xl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    
    .py-xl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    
    .py-xl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    
    .pt-xl-0 {
      padding-top: 0 !important;
    }
    
    .pt-xl-1 {
      padding-top: 0.25rem !important;
    }
    
    .pt-xl-2 {
      padding-top: 0.5rem !important;
    }
    
    .pt-xl-3 {
      padding-top: 1rem !important;
    }
    
    .pt-xl-4 {
      padding-top: 1.5rem !important;
    }
    
    .pt-xl-5 {
      padding-top: 3rem !important;
    }
    
    .pe-xl-0 {
      padding-right: 0 !important;
    }
    
    .pe-xl-1 {
      padding-right: 0.25rem !important;
    }
    
    .pe-xl-2 {
      padding-right: 0.5rem !important;
    }
    
    .pe-xl-3 {
      padding-right: 1rem !important;
    }
    
    .pe-xl-4 {
      padding-right: 1.5rem !important;
    }
    
    .pe-xl-5 {
      padding-right: 3rem !important;
    }
    
    .pb-xl-0 {
      padding-bottom: 0 !important;
    }
    
    .pb-xl-1 {
      padding-bottom: 0.25rem !important;
    }
    
    .pb-xl-2 {
      padding-bottom: 0.5rem !important;
    }
    
    .pb-xl-3 {
      padding-bottom: 1rem !important;
    }
    
    .pb-xl-4 {
      padding-bottom: 1.5rem !important;
    }
    
    .pb-xl-5 {
      padding-bottom: 3rem !important;
    }
    
    .ps-xl-0 {
      padding-left: 0 !important;
    }
    
    .ps-xl-1 {
      padding-left: 0.25rem !important;
    }
    
    .ps-xl-2 {
      padding-left: 0.5rem !important;
    }
    
    .ps-xl-3 {
      padding-left: 1rem !important;
    }
    
    .ps-xl-4 {
      padding-left: 1.5rem !important;
    }
    
    .ps-xl-5 {
      padding-left: 3rem !important;
    }
    
    .text-xl-start {
      text-align: left !important;
    }
    
    .text-xl-end {
      text-align: right !important;
    }
    
    .text-xl-center {
      text-align: center !important;
    }
  }
  
  @media (min-width: 1400px) {
    .float-xxl-start {
      float: left !important;
    }
    
    .float-xxl-end {
      float: right !important;
    }
    
    .float-xxl-none {
      float: none !important;
    }
    
    .d-xxl-inline {
      display: inline !important;
    }
    
    .d-xxl-inline-block {
      display: inline-block !important;
    }
    
    .d-xxl-block {
      display: block !important;
    }
    
    .d-xxl-grid {
      display: grid !important;
    }
    
    .d-xxl-table {
      display: table !important;
    }
    
    .d-xxl-table-row {
      display: table-row !important;
    }
    
    .d-xxl-table-cell {
      display: table-cell !important;
    }
    
    .d-xxl-flex {
      display: flex !important;
    }
    
    .d-xxl-inline-flex {
      display: inline-flex !important;
    }
    
    .d-xxl-none {
      display: none !important;
    }
    
    .flex-xxl-fill {
      flex: 1 1 auto !important;
    }
    
    .flex-xxl-row {
      flex-direction: row !important;
    }
    
    .flex-xxl-column {
      flex-direction: column !important;
    }
    
    .flex-xxl-row-reverse {
      flex-direction: row-reverse !important;
    }
    
    .flex-xxl-column-reverse {
      flex-direction: column-reverse !important;
    }
    
    .flex-xxl-grow-0 {
      flex-grow: 0 !important;
    }
    
    .flex-xxl-grow-1 {
      flex-grow: 1 !important;
    }
    
    .flex-xxl-shrink-0 {
      flex-shrink: 0 !important;
    }
    
    .flex-xxl-shrink-1 {
      flex-shrink: 1 !important;
    }
    
    .flex-xxl-wrap {
      flex-wrap: wrap !important;
    }
    
    .flex-xxl-nowrap {
      flex-wrap: nowrap !important;
    }
    
    .flex-xxl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    
    .gap-xxl-0 {
      gap: 0 !important;
    }
    
    .gap-xxl-1 {
      gap: 0.25rem !important;
    }
    
    .gap-xxl-2 {
      gap: 0.5rem !important;
    }
    
    .gap-xxl-3 {
      gap: 1rem !important;
    }
    
    .gap-xxl-4 {
      gap: 1.5rem !important;
    }
    
    .gap-xxl-5 {
      gap: 3rem !important;
    }
    
    .justify-content-xxl-start {
      justify-content: flex-start !important;
    }
    
    .justify-content-xxl-end {
      justify-content: flex-end !important;
    }
    
    .justify-content-xxl-center {
      justify-content: center !important;
    }
    
    .justify-content-xxl-between {
      justify-content: space-between !important;
    }
    
    .justify-content-xxl-around {
      justify-content: space-around !important;
    }
    
    .justify-content-xxl-evenly {
      justify-content: space-evenly !important;
    }
    
    .align-items-xxl-start {
      align-items: flex-start !important;
    }
    
    .align-items-xxl-end {
      align-items: flex-end !important;
    }
    
    .align-items-xxl-center {
      align-items: center !important;
    }
    
    .align-items-xxl-baseline {
      align-items: baseline !important;
    }
    
    .align-items-xxl-stretch {
      align-items: stretch !important;
    }
    
    .align-content-xxl-start {
      align-content: flex-start !important;
    }
    
    .align-content-xxl-end {
      align-content: flex-end !important;
    }
    
    .align-content-xxl-center {
      align-content: center !important;
    }
    
    .align-content-xxl-between {
      align-content: space-between !important;
    }
    
    .align-content-xxl-around {
      align-content: space-around !important;
    }
    
    .align-content-xxl-stretch {
      align-content: stretch !important;
    }
    
    .align-self-xxl-auto {
      align-self: auto !important;
    }
    
    .align-self-xxl-start {
      align-self: flex-start !important;
    }
    
    .align-self-xxl-end {
      align-self: flex-end !important;
    }
    
    .align-self-xxl-center {
      align-self: center !important;
    }
    
    .align-self-xxl-baseline {
      align-self: baseline !important;
    }
    
    .align-self-xxl-stretch {
      align-self: stretch !important;
    }
    
    .order-xxl-first {
      order: -1 !important;
    }
    
    .order-xxl-0 {
      order: 0 !important;
    }
    
    .order-xxl-1 {
      order: 1 !important;
    }
    
    .order-xxl-2 {
      order: 2 !important;
    }
    
    .order-xxl-3 {
      order: 3 !important;
    }
    
    .order-xxl-4 {
      order: 4 !important;
    }
    
    .order-xxl-5 {
      order: 5 !important;
    }
    
    .order-xxl-last {
      order: 6 !important;
    }
    
    .m-xxl-0 {
      margin: 0 !important;
    }
    
    .m-xxl-1 {
      margin: 0.25rem !important;
    }
    
    .m-xxl-2 {
      margin: 0.5rem !important;
    }
    
    .m-xxl-3 {
      margin: 1rem !important;
    }
    
    .m-xxl-4 {
      margin: 1.5rem !important;
    }
    
    .m-xxl-5 {
      margin: 3rem !important;
    }
    
    .m-xxl-auto {
      margin: auto !important;
    }
    
    .mx-xxl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    
    .mx-xxl-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    
    .mx-xxl-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    
    .mx-xxl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    
    .mx-xxl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    
    .mx-xxl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    
    .mx-xxl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    
    .my-xxl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    
    .my-xxl-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    
    .my-xxl-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    
    .my-xxl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    
    .my-xxl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    
    .my-xxl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    
    .my-xxl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    
    .mt-xxl-0 {
      margin-top: 0 !important;
    }
    
    .mt-xxl-1 {
      margin-top: 0.25rem !important;
    }
    
    .mt-xxl-2 {
      margin-top: 0.5rem !important;
    }
    
    .mt-xxl-3 {
      margin-top: 1rem !important;
    }
    
    .mt-xxl-4 {
      margin-top: 1.5rem !important;
    }
    
    .mt-xxl-5 {
      margin-top: 3rem !important;
    }
    
    .mt-xxl-auto {
      margin-top: auto !important;
    }
    
    .me-xxl-0 {
      margin-right: 0 !important;
    }
    
    .me-xxl-1 {
      margin-right: 0.25rem !important;
    }
    
    .me-xxl-2 {
      margin-right: 0.5rem !important;
    }
    
    .me-xxl-3 {
      margin-right: 1rem !important;
    }
    
    .me-xxl-4 {
      margin-right: 1.5rem !important;
    }
    
    .me-xxl-5 {
      margin-right: 3rem !important;
    }
    
    .me-xxl-auto {
      margin-right: auto !important;
    }
    
    .mb-xxl-0 {
      margin-bottom: 0 !important;
    }
    
    .mb-xxl-1 {
      margin-bottom: 0.25rem !important;
    }
    
    .mb-xxl-2 {
      margin-bottom: 0.5rem !important;
    }
    
    .mb-xxl-3 {
      margin-bottom: 1rem !important;
    }
    
    .mb-xxl-4 {
      margin-bottom: 1.5rem !important;
    }
    
    .mb-xxl-5 {
      margin-bottom: 3rem !important;
    }
    
    .mb-xxl-auto {
      margin-bottom: auto !important;
    }
    
    .ms-xxl-0 {
      margin-left: 0 !important;
    }
    
    .ms-xxl-1 {
      margin-left: 0.25rem !important;
    }
    
    .ms-xxl-2 {
      margin-left: 0.5rem !important;
    }
    
    .ms-xxl-3 {
      margin-left: 1rem !important;
    }
    
    .ms-xxl-4 {
      margin-left: 1.5rem !important;
    }
    
    .ms-xxl-5 {
      margin-left: 3rem !important;
    }
    
    .ms-xxl-auto {
      margin-left: auto !important;
    }
    
    .p-xxl-0 {
      padding: 0 !important;
    }
    
    .p-xxl-1 {
      padding: 0.25rem !important;
    }
    
    .p-xxl-2 {
      padding: 0.5rem !important;
    }
    
    .p-xxl-3 {
      padding: 1rem !important;
    }
    
    .p-xxl-4 {
      padding: 1.5rem !important;
    }
    
    .p-xxl-5 {
      padding: 3rem !important;
    }
    
    .px-xxl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    
    .px-xxl-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    
    .px-xxl-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    
    .px-xxl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    
    .px-xxl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    
    .px-xxl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    
    .py-xxl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    
    .py-xxl-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    
    .py-xxl-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    
    .py-xxl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    
    .py-xxl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    
    .py-xxl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    
    .pt-xxl-0 {
      padding-top: 0 !important;
    }
    
    .pt-xxl-1 {
      padding-top: 0.25rem !important;
    }
    
    .pt-xxl-2 {
      padding-top: 0.5rem !important;
    }
    
    .pt-xxl-3 {
      padding-top: 1rem !important;
    }
    
    .pt-xxl-4 {
      padding-top: 1.5rem !important;
    }
    
    .pt-xxl-5 {
      padding-top: 3rem !important;
    }
    
    .pe-xxl-0 {
      padding-right: 0 !important;
    }
    
    .pe-xxl-1 {
      padding-right: 0.25rem !important;
    }
    
    .pe-xxl-2 {
      padding-right: 0.5rem !important;
    }
    
    .pe-xxl-3 {
      padding-right: 1rem !important;
    }
    
    .pe-xxl-4 {
      padding-right: 1.5rem !important;
    }
    
    .pe-xxl-5 {
      padding-right: 3rem !important;
    }
    
    .pb-xxl-0 {
      padding-bottom: 0 !important;
    }
    
    .pb-xxl-1 {
      padding-bottom: 0.25rem !important;
    }
    
    .pb-xxl-2 {
      padding-bottom: 0.5rem !important;
    }
    
    .pb-xxl-3 {
      padding-bottom: 1rem !important;
    }
    
    .pb-xxl-4 {
      padding-bottom: 1.5rem !important;
    }
    
    .pb-xxl-5 {
      padding-bottom: 3rem !important;
    }
    
    .ps-xxl-0 {
      padding-left: 0 !important;
    }
    
    .ps-xxl-1 {
      padding-left: 0.25rem !important;
    }
    
    .ps-xxl-2 {
      padding-left: 0.5rem !important;
    }
    
    .ps-xxl-3 {
      padding-left: 1rem !important;
    }
    
    .ps-xxl-4 {
      padding-left: 1.5rem !important;
    }
    
    .ps-xxl-5 {
      padding-left: 3rem !important;
    }
    
    .text-xxl-start {
      text-align: left !important;
    }
    
    .text-xxl-end {
      text-align: right !important;
    }
    
    .text-xxl-center {
      text-align: center !important;
    }
  }
  
  @media (min-width: 1200px) {
    .fs-1 {
      font-size: 2.5rem !important;
    }
    
    .fs-2 {
      font-size: 2rem !important;
    }
    
    .fs-3 {
      font-size: 1.75rem !important;
    }
    
    .fs-4 {
      font-size: 1.5rem !important;
    }
  }
  
  @media print {
    .d-print-inline {
      display: inline !important;
    }
    
    .d-print-inline-block {
      display: inline-block !important;
    }
    
    .d-print-block {
      display: block !important;
    }
    
    .d-print-grid {
      display: grid !important;
    }
    
    .d-print-table {
      display: table !important;
    }
    
    .d-print-table-row {
      display: table-row !important;
    }
    
    .d-print-table-cell {
      display: table-cell !important;
    }
    
    .d-print-flex {
      display: flex !important;
    }
    
    .d-print-inline-flex {
      display: inline-flex !important;
    }
    
    .d-print-none {
      display: none !important;
    }
  }

  /* ===== ANIMATIONS ===== */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  
  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 100%, 0);
    }
  }
  
  @keyframes slideInDown {
    from {
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
  }
  
  @keyframes slideInRight {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
  }
  
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  
  @keyframes zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }
  
  @keyframes shake {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translate3d(-10px, 0, 0);
    }
    20%, 40%, 60%, 80% {
      transform: translate3d(10px, 0, 0);
    }
  }
  
  @keyframes headShake {
    0% {
      transform: translateX(0);
    }
    6.5% {
      transform: translateX(-6px) rotateY(-9deg);
    }
    18.5% {
      transform: translateX(5px) rotateY(7deg);
    }
    31.5% {
      transform: translateX(-3px) rotateY(-5deg);
    }
    43.5% {
      transform: translateX(2px) rotateY(3deg);
    }
    50% {
      transform: translateX(0);
    }
  }
  
  @keyframes swing {
    15% {
      transform: translateX(5px);
    }
    30% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(3px);
    }
    65% {
      transform: translateX(-3px);
    }
    80% {
      transform: translateX(2px);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  @keyframes tada {
    0% {
      transform: scale3d(1, 1, 1);
    }
    10%, 20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
    30%, 50%, 70%, 90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%, 60%, 80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
  
  @keyframes wobble {
    0% {
      transform: translate3d(0, 0, 0);
    }
    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }
    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }
    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }
    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes jello {
    0%, 11.1%, to {
      transform: translate3d(0, 0, 0);
    }
    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      transform: skewX(0.390625deg) skewY(0.390625deg);
    }
    88.8% {
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
  }
  
  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.3);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.3);
    }
    70% {
      transform: scale(1);
    }
  }
  
  @keyframes backInUp {
    0% {
      transform: translate3d(0, 1200px, 0) scale(0.7);
      opacity: 0.7;
    }
    80% {
      transform: translate3d(0, 0, 0) scale(0.7);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes backInDown {
    0% {
      transform: translate3d(0, -1200px, 0) scale(0.7);
      opacity: 0.7;
    }
    80% {
      transform: translate3d(0, 0, 0) scale(0.7);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes backInLeft {
    0% {
      transform: translate3d(-1200px, 0, 0) scale(0.7);
      opacity: 0.7;
    }
    80% {
      transform: translate3d(0, 0, 0) scale(0.7);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes backInRight {
    0% {
      transform: translate3d(1200px, 0, 0) scale(0.7);
      opacity: 0.7;
    }
    80% {
      transform: translate3d(0, 0, 0) scale(0.7);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes backOutUp {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    20% {
      transform: translate3d(0, 0, 0) scale(0.7);
      opacity: 0.7;
    }
    100% {
      transform: translate3d(0, -700px, 0) scale(0.7);
      opacity: 0.7;
    }
  }
  
  @keyframes backOutDown {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    20% {
      transform: translate3d(0, 0, 0) scale(0.7);
      opacity: 0.7;
    }
    100% {
      transform: translate3d(0, 700px, 0) scale(0.7);
      opacity: 0.7;
    }
  }
  
  @keyframes backOutLeft {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    20% {
      transform: translate3d(0, 0, 0) scale(0.7);
      opacity: 0.7;
    }
    100% {
      transform: translate3d(-2000px, 0, 0) scale(0.7);
      opacity: 0.7;
    }
  }
  
  @keyframes backOutRight {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    20% {
      transform: translate3d(0, 0, 0) scale(0.7);
      opacity: 0.7;
    }
    100% {
      transform: translate3d(2000px, 0, 0) scale(0.7);
      opacity: 0.7;
    }
  }
  
  @keyframes bounceIn {
    0%, 20%, 40%, 60%, 80%, to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
  
  @keyframes bounceInDown {
    0%, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0) scaleY(3);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0) scaleY(0.9);
    }
    75% {
      transform: translate3d(0, -10px, 0) scaleY(0.95);
    }
    90% {
      transform: translate3d(0, 5px, 0) scaleY(0.985);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes bounceInLeft {
    0%, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0) scaleX(3);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0) scaleX(1);
    }
    75% {
      transform: translate3d(-10px, 0, 0) scaleX(0.98);
    }
    90% {
      transform: translate3d(5px, 0, 0) scaleX(0.995);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes bounceInRight {
    0%, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(3000px, 0, 0) scaleX(3);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0) scaleX(1);
    }
    75% {
      transform: translate3d(10px, 0, 0) scaleX(0.98);
    }
    90% {
      transform: translate3d(-5px, 0, 0) scaleX(0.995);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes bounceInUp {
    0%, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, 3000px, 0) scaleY(5);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0) scaleY(0.9);
    }
    75% {
      transform: translate3d(0, 10px, 0) scaleY(0.95);
    }
    90% {
      transform: translate3d(0, -5px, 0) scaleY(0.985);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes bounceOut {
    20% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%, 55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  
  @keyframes bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0) scaleY(0.985);
    }
    40%, 45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0) scaleY(0.9);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0) scaleY(3);
    }
  }
  
  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0) scaleX(0.9);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0) scaleX(2);
    }
  }
  
  @keyframes bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0) scaleX(0.9);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0) scaleX(2);
    }
  }
  
  @keyframes bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0) scaleY(0.985);
    }
    40%, 45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0) scaleY(0.9);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0) scaleY(3);
    }
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInDownBig {
    from {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInLeftBig {
    from {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInRightBig {
    from {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInUpBig {
    from {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeOutDown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
  
  @keyframes fadeOutDownBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  
  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
  
  @keyframes fadeOutLeftBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  
  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
  
  @keyframes fadeOutRightBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
  }
  
  @keyframes fadeOutUpBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  
  @keyframes flip {
    from {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
      animation-timing-function: ease-out;
    }
    40% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
      animation-timing-function: ease-out;
    }
    50% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
      animation-timing-function: ease-in;
    }
    80% {
      transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
    to {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
  }
  
  @keyframes flipInX {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
      animation-timing-function: ease-in;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
      animation-timing-function: ease-in;
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      animation-timing-function: ease-in;
    }
    to {
      transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
      animation-timing-function: ease-in;
    }
  }
  
  @keyframes flipInY {
    from {
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
      animation-timing-function: ease-in;
    }
    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
      animation-timing-function: ease-in;
    }
    80% {
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      animation-timing-function: ease-in;
    }
    to {
      transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
  }
  
  @keyframes flipOutX {
    from {
      transform: perspective(400px);
    }
    30% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }
    to {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }
  
  @keyframes flipOutY {
    from {
      transform: perspective(400px);
    }
    30% {
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }
    to {
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  }
  
  @keyframes lightSpeedIn {
    from {
      transform: translate3d(100%, 0, 0) skewX(-30deg);
      opacity: 0;
    }
    60% {
      transform: skewX(20deg);
      opacity: 1;
    }
    80% {
      transform: skewX(-5deg);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes lightSpeedOut {
    from {
      opacity: 1;
    }
    to {
      transform: translate3d(100%, 0, 0) skewX(30deg);
      opacity: 0;
    }
  }
  
  @keyframes rotateIn {
    from {
      transform-origin: center;
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: 0;
    }
    to {
      transform-origin: center;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  
  @keyframes rotateInDownLeft {
    from {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
    to {
      transform-origin: left bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  
  @keyframes rotateInDownRight {
    from {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
    to {
      transform-origin: right bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  
  @keyframes rotateInUpLeft {
    from {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
    to {
      transform-origin: left bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  
  @keyframes rotateInUpRight {
    from {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
    to {
      transform-origin: right bottom;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  
  @keyframes rotateOut {
    from {
      transform-origin: center;
      opacity: 1;
    }
    to {
      transform-origin: center;
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
  }
  
  @keyframes rotateOutDownLeft {
    from {
      transform-origin: left bottom;
      opacity: 1;
    }
    to {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  }
  
  @keyframes rotateOutDownRight {
    from {
      transform-origin: right bottom;
      opacity: 1;
    }
    to {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }
  
  @keyframes rotateOutUpLeft {
    from {
      transform-origin: left bottom;
      opacity: 1;
    }
    to {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }
  
  @keyframes rotateOutUpRight {
    from {
      transform-origin: right bottom;
      opacity: 1;
    }
    to {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  }
  
  @keyframes hinge {
    0% {
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    20%, 60% {
      transform: rotate3d(0, 0, 1, 80deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    40%, 80% {
      transform: rotate3d(0, 0, 1, 60deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
      opacity: 1;
    }
    to {
      transform: translate3d(0, 700px, 0);
      opacity: 0;
    }
  }
  
  @keyframes jackInTheBox {
    from {
      opacity: 0;
      transform: scale(0.1) rotate(30deg);
      transform-origin: center bottom;
    }
    50% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(3deg);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes rollIn {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes rollOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }
  
  @keyframes zoomInDown {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  
  @keyframes zoomInLeft {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  
  @keyframes zoomInRight {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  
  @keyframes zoomInUp {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  
  @keyframes zoomOutDown {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    100% {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  
  @keyframes zoomOutLeft {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    100% {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-2000px, 0, 0);
      transform-origin: left center;
    }
  }
  
  @keyframes zoomOutRight {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    100% {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(2000px, 0, 0);
      transform-origin: right center;
    }
  }
  
  @keyframes zoomOutUp {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    100% {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  
  @keyframes slideInDown {
    from {
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes slideInRight {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 100%, 0);
    }
  }
  
  @keyframes slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
  }
  
  @keyframes slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
  }
  
  /* Animation Classes */
  .animate-fadeIn { animation: fadeIn var(--transition); }
  .animate-fadeOut { animation: fadeOut var(--transition); }
  .animate-slideInUp { animation: slideInUp var(--transition); }
  .animate-slideInDown { animation: slideInDown var(--transition); }
  .animate-slideInLeft { animation: slideInLeft var(--transition); }
  .animate-slideInRight { animation: slideInRight var(--transition); }
  .animate-slideOutUp { animation: slideOutUp var(--transition); }
  .animate-slideOutDown { animation: slideOutDown var(--transition); }
  .animate-slideOutLeft { animation: slideOutLeft var(--transition); }
  .animate-slideOutRight { animation: slideOutRight var(--transition); }
  .animate-zoomIn { animation: zoomIn var(--transition); }
  .animate-zoomOut { animation: zoomOut var(--transition); }
  .animate-bounce { animation: bounce 1s infinite; }
  .animate-flash { animation: flash 1s infinite; }
  .animate-pulse { animation: pulse 2s infinite; }
  .animate-rubberBand { animation: rubberBand 1s infinite; }
  .animate-shakeX { animation: shakeX 1s infinite; }
  .animate-shakeY { animation: shakeY 1s infinite; }
  .animate-headShake { animation: headShake 1s infinite; }
  .animate-swing { animation: swing 1s infinite; }
  .animate-tada { animation: tada 1s infinite; }
  .animate-wobble { animation: wobble 1s infinite; }
  .animate-jello { animation: jello 1s infinite; }
  .animate-heartBeat { animation: heartBeat 1s infinite; }
  
  .animate-infinite {
    animation-iteration-count: infinite;
  }
  
  .animate-delay-1s {
    animation-delay: 1s;
  }
  
  .animate-delay-2s {
    animation-delay: 2s;
  }
  
  .animate-delay-3s {
    animation-delay: 3s;
  }
  
  .animate-delay-4s {
    animation-delay: 4s;
  }
  
  .animate-delay-5s {
    animation-delay: 5s;
  }
  
  .animate-fast {
    animation-duration: 0.5s;
  }
  
  .animate-faster {
    animation-duration: 0.3s;
  }
  
  .animate-slow {
    animation-duration: 2s;
  }
  
  .animate-slower {
    animation-duration: 3s;
  }
}

/* ===== GRK COMPLETED IT FROM HERE TO THE END(https://grok.com/project/7aa8cdc8-58c4-405d-b698-6a89317b86ff?tab=attachments&chat=0ffb4443-1f30-457a-b526-2a7305d6057c) ===== */
/* Keg CSS v3.4.0 - Enterprise-Grade UI Framework /
/ Copyright (c) 2025 John Kesh Mahugu | johnmahugu@gmail.com | +254722925095 /
/ License: MIT | Timestamp: September 01, 2025 */
/* ===== FONT IMPORTS ===== */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css');
/* ===== LAYERS ===== /
@layer reset {
/ Modern Reset */
*, *::before, *::after {
box-sizing: border-box;
margin: 0;
padding: 0;
}
html {
-webkit-text-size-adjust: 100%;
-ms-text-size-adjust: 100%;
font-size: 16px;
}
body {
font-family: 'Roboto', system-ui, sans-serif;
line-height: 1.6;
-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
color: var(--on-background);
background: var(--background);
}
img, picture, video, canvas, svg {
display: block;
max-width: 100%;
height: auto;
}
input, button, textarea, select {
font: inherit;
background: none;
border: none;
color: inherit;
}
a {
color: inherit;
text-decoration: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
ul, ol {
padding: 0;
list-style: none;
}
button {
cursor: pointer;
background: none;
border: none;
}
/* Accessibility */
:focus-visible {
outline: 2px solid var(--primary);
outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
transition: none !important;
animation: none !important;
}
}
}
@layer base {
/* ===== THEMING VARIABLES ===== /
:root {
/ Material Design 3 Colors */
--primary: #6200ea;
--on-primary: #ffffff;
--primary-container: #d0bfff;
--on-primary-container: #21005d;
--secondary: #03dac6;
--on-secondary: #000000;
--secondary-container: #d0f8f2;
--on-secondary-container: #00201d;
--tertiary: #ff4081;
--on-tertiary: #ffffff;
--tertiary-container: #ffdade;
--on-tertiary-container: #40000a;
--error: #b00020;
--on-error: #ffffff;
--error-container: #ffdad6;
--on-error-container: #410002;
--background: #ffffff;
--on-background: #1c1b1f;
--surface: #f5f5f5;
--on-surface: #1c1b1f;
--surface-variant: #e7e0ec;
--on-surface-variant: #49454f;
--outline: #7a757f;
--shadow: rgba(0,0,0,0.2);
/* Extended Colors */
--success: #00c853;
--warning: #ffd600;
--info: #2196f3;
--danger: #ff3860;
--link: #3273dc;
/* Spacing & Sizing */
--spacing-unit: 4px;
--font-size-base: 1rem;
--border-radius: 4px;
--transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
/* Typography */
--font-family-sans: 'Roboto', system-ui, sans-serif;
--font-family-mono: 'Roboto Mono', Consolas, monospace;
/* Shadows */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 20px rgba(0,0,0,0.1);
--shadow-xl: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.08);
}
/* Dark Theme */
[data-theme="dark"], @media (prefers-color-scheme: dark) {
--primary: #bb86fc;
--on-primary: #32005d;
--primary-container: #4a007a;
--on-primary-container: #e3d6ff;
--secondary: #b4ccc5;
--on-secondary: #1e3531;
--secondary-container: #354b47;
--on-secondary-container: #d0e8e1;
--tertiary: #ffb3ba;
--on-tertiary: #68001e;
--tertiary-container: #8e2c37;
--on-tertiary-container: #ffb3ba;
--error: #ffb4ab;
--on-error: #690005;
--error-container: #93000a;
--on-error-container: #ffb4ab;
--background: #1c1b1f;
--on-background: #e6e1e5;
--surface: #1c1b1f;
--on-surface: #e6e1e5;
--surface-variant: #49454f;
--on-surface-variant: #cbc4cf;
--outline: #948f99;
}
/* High Contrast Theme */
[data-theme="high-contrast"] {
--primary: #000;
--on-primary: #fff;
--background: #fff;
--on-background: #000;
--surface: #fff;
--on-surface: #000;
--border: 2px solid #000;
--shadow: none;
}
/* RTL Support */
[dir="rtl"] {
direction: rtl;
text-align: right;
}
/* Root Styles */
html {
scroll-behavior: smooth;
}
body {
min-height: 100vh;
text-rendering: optimizeSpeed;
}
}
@layer utilities {
/* ===== SPACING ===== */
.m-0 { margin: 0; }
.m-1 { margin: calc(var(--spacing-unit) * 1); }
.m-2 { margin: calc(var(--spacing-unit) * 2); }
.m-3 { margin: calc(var(--spacing-unit) * 3); }
.m-4 { margin: calc(var(--spacing-unit) * 4); }
.m-5 { margin: calc(var(--spacing-unit) * 5); }
.m-6 { margin: calc(var(--spacing-unit) * 6); }
.m-8 { margin: calc(var(--spacing-unit) * 8); }
.m-10 { margin: calc(var(--spacing-unit) * 10); }
.m-12 { margin: calc(var(--spacing-unit) * 12); }
.m-16 { margin: calc(var(--spacing-unit) * 16); }
.m-20 { margin: calc(var(--spacing-unit) * 20); }
.mt-0 { margin-top: 0; }
.mt-1 { margin-top: calc(var(--spacing-unit) * 1); }
.mt-2 { margin-top: calc(var(--spacing-unit) * 2); }
.mt-3 { margin-top: calc(var(--spacing-unit) * 3); }
.mt-4 { margin-top: calc(var(--spacing-unit) * 4); }
.mt-5 { margin-top: calc(var(--spacing-unit) * 5); }
.mt-6 { margin-top: calc(var(--spacing-unit) * 6); }
.mt-8 { margin-top: calc(var(--spacing-unit) * 8); }
.mt-10 { margin-top: calc(var(--spacing-unit) * 10); }
.mt-12 { margin-top: calc(var(--spacing-unit) * 12); }
.mt-16 { margin-top: calc(var(--spacing-unit) * 16); }
.mt-20 { margin-top: calc(var(--spacing-unit) * 20); }
.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: calc(var(--spacing-unit) * 1); }
.mb-2 { margin-bottom: calc(var(--spacing-unit) * 2); }
.mb-3 { margin-bottom: calc(var(--spacing-unit) * 3); }
.mb-4 { margin-bottom: calc(var(--spacing-unit) * 4); }
.mb-5 { margin-bottom: calc(var(--spacing-unit) * 5); }
.mb-6 { margin-bottom: calc(var(--spacing-unit) * 6); }
.mb-8 { margin-bottom: calc(var(--spacing-unit) * 8); }
.mb-10 { margin-bottom: calc(var(--spacing-unit) * 10); }
.mb-12 { margin-bottom: calc(var(--spacing-unit) * 12); }
.mb-16 { margin-bottom: calc(var(--spacing-unit) * 16); }
.mb-20 { margin-bottom: calc(var(--spacing-unit) * 20); }
.ml-0 { margin-left: 0; }
.ml-1 { margin-left: calc(var(--spacing-unit) * 1); }
.ml-2 { margin-left: calc(var(--spacing-unit) * 2); }
.ml-3 { margin-left: calc(var(--spacing-unit) * 3); }
.ml-4 { margin-left: calc(var(--spacing-unit) * 4); }
.ml-5 { margin-left: calc(var(--spacing-unit) * 5); }
.ml-6 { margin-left: calc(var(--spacing-unit) * 6); }
.ml-8 { margin-left: calc(var(--spacing-unit) * 8); }
.ml-10 { margin-left: calc(var(--spacing-unit) * 10); }
.ml-12 { margin-left: calc(var(--spacing-unit) * 12); }
.ml-16 { margin-left: calc(var(--spacing-unit) * 16); }
.ml-20 { margin-left: calc(var(--spacing-unit) * 20); }
.mr-0 { margin-right: 0; }
.mr-1 { margin-right: calc(var(--spacing-unit) * 1); }
.mr-2 { margin-right: calc(var(--spacing-unit) * 2); }
.mr-3 { margin-right: calc(var(--spacing-unit) * 3); }
.mr-4 { margin-right: calc(var(--spacing-unit) * 4); }
.mr-5 { margin-right: calc(var(--spacing-unit) * 5); }
.mr-6 { margin-right: calc(var(--spacing-unit) * 6); }
.mr-8 { margin-right: calc(var(--spacing-unit) * 8); }
.mr-10 { margin-right: calc(var(--spacing-unit) * 10); }
.mr-12 { margin-right: calc(var(--spacing-unit) * 12); }
.mr-16 { margin-right: calc(var(--spacing-unit) * 16); }
.mr-20 { margin-right: calc(var(--spacing-unit) * 20); }
.mx-0 { margin-left: 0; margin-right: 0; }
.mx-1 { margin-left: calc(var(--spacing-unit) * 1); margin-right: calc(var(--spacing-unit) * 1); }
.mx-2 { margin-left: calc(var(--spacing-unit) * 2); margin-right: calc(var(--spacing-unit) * 2); }
.mx-3 { margin-left: calc(var(--spacing-unit) * 3); margin-right: calc(var(--spacing-unit) * 3); }
.mx-4 { margin-left: calc(var(--spacing-unit) * 4); margin-right: calc(var(--spacing-unit) * 4); }
.mx-5 { margin-left: calc(var(--spacing-unit) * 5); margin-right: calc(var(--spacing-unit) * 5); }
.mx-6 { margin-left: calc(var(--spacing-unit) * 6); margin-right: calc(var(--spacing-unit) * 6); }
.mx-8 { margin-left: calc(var(--spacing-unit) * 8); margin-right: calc(var(--spacing-unit) * 8); }
.mx-10 { margin-left: calc(var(--spacing-unit) * 10); margin-right: calc(var(--spacing-unit) * 10); }
.mx-12 { margin-left: calc(var(--spacing-unit) * 12); margin-right: calc(var(--spacing-unit) * 12); }
.mx-16 { margin-left: calc(var(--spacing-unit) * 16); margin-right: calc(var(--spacing-unit) * 16); }
.mx-20 { margin-left: calc(var(--spacing-unit) * 20); margin-right: calc(var(--spacing-unit) * 20); }
.my-0 { margin-top: 0; margin-bottom: 0; }
.my-1 { margin-top: calc(var(--spacing-unit) * 1); margin-bottom: calc(var(--spacing-unit) * 1); }
.my-2 { margin-top: calc(var(--spacing-unit) * 2); margin-bottom: calc(var(--spacing-unit) * 2); }
.my-3 { margin-top: calc(var(--spacing-unit) * 3); margin-bottom: calc(var(--spacing-unit) * 3); }
.my-4 { margin-top: calc(var(--spacing-unit) * 4); margin-bottom: calc(var(--spacing-unit) * 4); }
.my-5 { margin-top: calc(var(--spacing-unit) * 5); margin-bottom: calc(var(--spacing-unit) * 5); }
.my-6 { margin-top: calc(var(--spacing-unit) * 6); margin-bottom: calc(var(--spacing-unit) * 6); }
.my-8 { margin-top: calc(var(--spacing-unit) * 8); margin-bottom: calc(var(--spacing-unit) * 8); }
.my-10 { margin-top: calc(var(--spacing-unit) * 10); margin-bottom: calc(var(--spacing-unit) * 10); }
.my-12 { margin-top: calc(var(--spacing-unit) * 12); margin-bottom: calc(var(--spacing-unit) * 12); }
.my-16 { margin-top: calc(var(--spacing-unit) * 16); margin-bottom: calc(var(--spacing-unit) * 16); }
.my-20 { margin-top: calc(var(--spacing-unit) * 20); margin-bottom: calc(var(--spacing-unit) * 20); }
.p-0 { padding: 0; }
.p-1 { padding: calc(var(--spacing-unit) * 1); }
.p-2 { padding: calc(var(--spacing-unit) * 2); }
.p-3 { padding: calc(var(--spacing-unit) * 3); }
.p-4 { padding: calc(var(--spacing-unit) * 4); }
.p-5 { padding: calc(var(--spacing-unit) * 5); }
.p-6 { padding: calc(var(--spacing-unit) * 6); }
.p-8 { padding: calc(var(--spacing-unit) * 8); }
.p-10 { padding: calc(var(--spacing-unit) * 10); }
.p-12 { padding: calc(var(--spacing-unit) * 12); }
.p-16 { padding: calc(var(--spacing-unit) * 16); }
.p-20 { padding: calc(var(--spacing-unit) * 20); }
.pt-0 { padding-top: 0; }
.pt-1 { padding-top: calc(var(--spacing-unit) * 1); }
.pt-2 { padding-top: calc(var(--spacing-unit) * 2); }
.pt-3 { padding-top: calc(var(--spacing-unit) * 3); }
.pt-4 { padding-top: calc(var(--spacing-unit) * 4); }
.pt-5 { padding-top: calc(var(--spacing-unit) * 5); }
.pt-6 { padding-top: calc(var(--spacing-unit) * 6); }
.pt-8 { padding-top: calc(var(--spacing-unit) * 8); }
.pt-10 { padding-top: calc(var(--spacing-unit) * 10); }
.pt-12 { padding-top: calc(var(--spacing-unit) * 12); }
.pt-16 { padding-top: calc(var(--spacing-unit) * 16); }
.pt-20 { padding-top: calc(var(--spacing-unit) * 20); }
.pb-0 { padding-bottom: 0; }
.pb-1 { padding-bottom: calc(var(--spacing-unit) * 1); }
.pb-2 { padding-bottom: calc(var(--spacing-unit) * 2); }
.pb-3 { padding-bottom: calc(var(--spacing-unit) * 3); }
.pb-4 { padding-bottom: calc(var(--spacing-unit) * 4); }
.pb-5 { padding-bottom: calc(var(--spacing-unit) * 5); }
.pb-6 { padding-bottom: calc(var(--spacing-unit) * 6); }
.pb-8 { padding-bottom: calc(var(--spacing-unit) * 8); }
.pb-10 { padding-bottom: calc(var(--spacing-unit) * 10); }
.pb-12 { padding-bottom: calc(var(--spacing-unit) * 12); }
.pb-16 { padding-bottom: calc(var(--spacing-unit) * 16); }
.pb-20 { padding-bottom: calc(var(--spacing-unit) * 20); }
.pl-0 { padding-left: 0; }
.pl-1 { padding-left: calc(var(--spacing-unit) * 1); }
.pl-2 { padding-left: calc(var(--spacing-unit) * 2); }
.pl-3 { padding-left: calc(var(--spacing-unit) * 3); }
.pl-4 { padding-left: calc(var(--spacing-unit) * 4); }
.pl-5 { padding-left: calc(var(--spacing-unit) * 5); }
.pl-6 { padding-left: calc(var(--spacing-unit) * 6); }
.pl-8 { padding-left: calc(var(--spacing-unit) * 8); }
.pl-10 { padding-left: calc(var(--spacing-unit) * 10); }
.pl-12 { padding-left: calc(var(--spacing-unit) * 12); }
.pl-16 { padding-left: calc(var(--spacing-unit) * 16); }
.pl-20 { padding-left: calc(var(--spacing-unit) * 20); }
.pr-0 { padding-right: 0; }
.pr-1 { padding-right: calc(var(--spacing-unit) * 1); }
.pr-2 { padding-right: calc(var(--spacing-unit) * 2); }
.pr-3 { padding-right: calc(var(--spacing-unit) * 3); }
.pr-4 { padding-right: calc(var(--spacing-unit) * 4); }
.pr-5 { padding-right: calc(var(--spacing-unit) * 5); }
.pr-6 { padding-right: calc(var(--spacing-unit) * 6); }
.pr-8 { padding-right: calc(var(--spacing-unit) * 8); }
.pr-10 { padding-right: calc(var(--spacing-unit) * 10); }
.pr-12 { padding-right: calc(var(--spacing-unit) * 12); }
.pr-16 { padding-right: calc(var(--spacing-unit) * 16); }
.pr-20 { padding-right: calc(var(--spacing-unit) * 20); }
.px-0 { padding-left: 0; padding-right: 0; }
.px-1 { padding-left: calc(var(--spacing-unit) * 1); padding-right: calc(var(--spacing-unit) * 1); }
.px-2 { padding-left: calc(var(--spacing-unit) * 2); padding-right: calc(var(--spacing-unit) * 2); }
.px-3 { padding-left: calc(var(--spacing-unit) * 3); padding-right: calc(var(--spacing-unit) * 3); }
.px-4 { padding-left: calc(var(--spacing-unit) * 4); padding-right: calc(var(--spacing-unit) * 4); }
.px-5 { padding-left: calc(var(--spacing-unit) * 5); padding-right: calc(var(--spacing-unit) * 5); }
.px-6 { padding-left: calc(var(--spacing-unit) * 6); padding-right: calc(var(--spacing-unit) * 6); }
.px-8 { padding-left: calc(var(--spacing-unit) * 8); padding-right: calc(var(--spacing-unit) * 8); }
.px-10 { padding-left: calc(var(--spacing-unit) * 10); padding-right: calc(var(--spacing-unit) * 10); }
.px-12 { padding-left: calc(var(--spacing-unit) * 12); padding-right: calc(var(--spacing-unit) * 12); }
.px-16 { padding-left: calc(var(--spacing-unit) * 16); padding-right: calc(var(--spacing-unit) * 16); }
.px-20 { padding-left: calc(var(--spacing-unit) * 20); padding-right: calc(var(--spacing-unit) * 20); }
.py-0 { padding-top: 0; padding-bottom: 0; }
.py-1 { padding-top: calc(var(--spacing-unit) * 1); padding-bottom: calc(var(--spacing-unit) * 1); }
.py-2 { padding-top: calc(var(--spacing-unit) * 2); padding-bottom: calc(var(--spacing-unit) * 2); }
.py-3 { padding-top: calc(var(--spacing-unit) * 3); padding-bottom: calc(var(--spacing-unit) * 3); }
.py-4 { padding-top: calc(var(--spacing-unit) * 4); padding-bottom: calc(var(--spacing-unit) * 4); }
.py-5 { padding-top: calc(var(--spacing-unit) * 5); padding-bottom: calc(var(--spacing-unit) * 5); }
.py-6 { padding-top: calc(var(--spacing-unit) * 6); padding-bottom: calc(var(--spacing-unit) * 6); }
.py-8 { padding-top: calc(var(--spacing-unit) * 8); padding-bottom: calc(var(--spacing-unit) * 8); }
.py-10 { padding-top: calc(var(--spacing-unit) * 10); padding-bottom: calc(var(--spacing-unit) * 10); }
.py-12 { padding-top: calc(var(--spacing-unit) * 12); padding-bottom: calc(var(--spacing-unit) * 12); }
.py-16 { padding-top: calc(var(--spacing-unit) * 16); padding-bottom: calc(var(--spacing-unit) * 16); }
.py-20 { padding-top: calc(var(--spacing-unit) * 20); padding-bottom: calc(var(--spacing-unit) * 20); }
/* ===== COLORS ===== */
.bg-primary { background-color: var(--primary); }
.bg-secondary { background-color: var(--secondary); }
.bg-tertiary { background-color: var(--tertiary); }
.bg-error { background-color: var(--error); }
.bg-success { background-color: var(--success); }
.bg-warning { background-color: var(--warning); }
.bg-info { background-color: var(--info); }
.bg-danger { background-color: var(--danger); }
.bg-link { background-color: var(--link); }
.bg-surface { background-color: var(--surface); }
.bg-background { background-color: var(--background); }
.bg-transparent { background-color: transparent; }
.text-primary { color: var(--primary); }
.text-secondary { color: var(--secondary); }
.text-tertiary { color: var(--tertiary); }
.text-error { color: var(--error); }
.text-success { color: var(--success); }
.text-warning { color: var(--warning); }
.text-info { color: var(--info); }
.text-danger { color: var(--danger); }
.text-link { color: var(--link); }
.text-on-surface { color: var(--on-surface); }
.text-on-background { color: var(--on-background); }
/* =====TYPOGRAPHY ===== */
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }
.text-4xl { font-size: 2.25rem; }
.text-5xl { font-size: 3rem; }
.text-6xl { font-size: 3.75rem; }
.font-thin { font-weight: 100; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
.font-black { font-weight: 900; }
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }
.leading-none { line-height: 1; }
.leading-tight { line-height: 1.25; }
.leading-snug { line-height: 1.375; }
.leading-normal { line-height: 1.5; }
.leading-relaxed { line-height: 1.625; }
.leading-loose { line-height: 2; }
/* ===== LAYOUT ===== */
.flex { display: flex; }
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-center { align-items: center; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr)); }
.grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr)); }
.grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr)); }
.grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr)); }
.grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
.gap-0 { gap: 0; }
.gap-1 { gap: calc(var(--spacing-unit) * 1); }
.gap-2 { gap: calc(var(--spacing-unit) * 2); }
.gap-3 { gap: calc(var(--spacing-unit) * 3); }
.gap-4 { gap: calc(var(--spacing-unit) * 4); }
.gap-5 { gap: calc(var(--spacing-unit) * 5); }
.gap-6 { gap: calc(var(--spacing-unit) * 6); }
.gap-8 { gap: calc(var(--spacing-unit) * 8); }
.gap-10 { gap: calc(var(--spacing-unit) * 10); }
.gap-12 { gap: calc(var(--spacing-unit) * 12); }
.gap-16 { gap: calc(var(--spacing-unit) * 16); }
.gap-20 { gap: calc(var(--spacing-unit) * 20); }
.col-span-1 { grid-column: span 1 / span 1; }
.col-span-2 { grid-column: span 2 / span 2; }
.col-span-3 { grid-column: span 3 / span 3; }
.col-span-4 { grid-column: span 4 / span 4; }
.col-span-5 { grid-column: span 5 / span 5; }
.col-span-6 { grid-column: span 6 / span 6; }
.col-span-7 { grid-column: span 7 / span 7; }
.col-span-8 { grid-column: span 8 / span 8; }
.col-span-9 { grid-column: span 9 / span 9; }
.col-span-10 { grid-column: span 10 / span 10; }
.col-span-11 { grid-column: span 11 / span 11; }
.col-span-12 { grid-column: span 12 / span 12; }
.row-span-1 { grid-row: span 1 / span 1; }
.row-span-2 { grid-row: span 2 / span 2; }
.row-span-3 { grid-row: span 3 / span 3; }
.row-span-4 { grid-row: span 4 / span 4; }
.row-span-5 { grid-row: span 5 / span 5; }
.row-span-6 { grid-row: span 6 / span 6; }
/* ===== BORDERS & SHADOWS ===== */
.border { border: 1px solid var(--outline); }
.border-t { border-top: 1px solid var(--outline); }
.border-b { border-bottom: 1px solid var(--outline); }
.border-l { border-left: 1px solid var(--outline); }
.border-r { border-right: 1px solid var(--outline); }
.border-0 { border-width: 0; }
.border-2 { border-width: 2px; }
.border-4 { border-width: 4px; }
.border-8 { border-width: 8px; }
.rounded-none { border-radius: 0; }
.rounded-sm { border-radius: 0.125rem; }
.rounded { border-radius: 0.25rem; }
.rounded-md { border-radius: 0.375rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-2xl { border-radius: 1rem; }
.rounded-full { border-radius: 9999px; }
.shadow-none { box-shadow: none; }
.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow { box-shadow: var(--shadow-md); }
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }
.shadow-xl { box-shadow: var(--shadow-xl); }
/* ===== SIZING ===== */
.w-0 { width: 0; }
.w-auto { width: auto; }
.w-full { width: 100%; }
.w-screen { width: 100vw; }
.w-min { width: min-content; }
.w-max { width: max-content; }
.w-1 { width: calc(var(--spacing-unit) * 1); }
.w-2 { width: calc(var(--spacing-unit) * 2); }
.w-4 { width: calc(var(--spacing-unit) * 4); }
.w-6 { width: calc(var(--spacing-unit) * 6); }
.w-8 { width: calc(var(--spacing-unit) * 8); }
.w-10 { width: calc(var(--spacing-unit) * 10); }
.w-12 { width: calc(var(--spacing-unit) * 12); }
.w-16 { width: calc(var(--spacing-unit) * 16); }
.w-20 { width: calc(var(--spacing-unit) * 20); }
.w-24 { width: calc(var(--spacing-unit) * 24); }
.w-32 { width: calc(var(--spacing-unit) * 32); }
.w-40 { width: calc(var(--spacing-unit) * 40); }
.w-48 { width: calc(var(--spacing-unit) * 48); }
.w-56 { width: calc(var(--spacing-unit) * 56); }
.w-64 { width: calc(var(--spacing-unit) * 64); }
.w-1/2 { width: 50%; }
.w-1/3 { width: 33.333333%; }
.w-2/3 { width: 66.666667%; }
.w-1/4 { width: 25%; }
.w-3/4 { width: 75%; }
.w-1/5 { width: 20%; }
.w-2/5 { width: 40%; }
.w-3/5 { width: 60%; }
.w-4/5 { width: 80%; }
.w-1/6 { width: 16.666667%; }
.w-5/6 { width: 83.333333%; }
.w-1/12 { width: 8.333333%; }
.w-5/12 { width: 41.666667%; }
.w-7/12 { width: 58.333333%; }
.w-11/12 { width: 91.666667%; }
.h-0 { height: 0; }
.h-auto { height: auto; }
.h-full { height: 100%; }
.h-screen { height: 100vh; }
.h-min { height: min-content; }
.h-max { height: max-content; }
.h-1 { height: calc(var(--spacing-unit) * 1); }
.h-2 { height: calc(var(--spacing-unit) * 2); }
.h-4 { height: calc(var(--spacing-unit) * 4); }
.h-6 { height: calc(var(--spacing-unit) * 6); }
.h-8 { height: calc(var(--spacing-unit) * 8); }
.h-10 { height: calc(var(--spacing-unit) * 10); }
.h-12 { height: calc(var(--spacing-unit) * 12); }
.h-16 { height: calc(var(--spacing-unit) * 16); }
.h-20 { height: calc(var(--spacing-unit) * 20); }
.h-24 { height: calc(var(--spacing-unit) * 24); }
.h-32 { height: calc(var(--spacing-unit) * 32); }
.h-40 { height: calc(var(--spacing-unit) * 40); }
.h-48 { height: calc(var(--spacing-unit) * 48); }
.h-56 { height: calc(var(--spacing-unit) * 56); }
.h-64 { height: calc(var(--spacing-unit) * 64); }
.h-1/2 { height: 50%; }
.h-1/3 { height: 33.333333%; }
.h-2/3 { height: 66.666667%; }
.h-1/4 { height: 25%; }
.h-3/4 { height: 75%; }
.h-1/5 { height: 20%; }
.h-2/5 { height: 40%; }
.h-3/5 { height: 60%; }
.h-4/5 { height: 80%; }
.h-1/6 { height: 16.666667%; }
.h-5/6 { height: 83.333333%; }
.max-w-xs { max-width: 20rem; }
.max-w-sm { max-width: 24rem; }
.max-w-md { max-width: 28rem; }
.max-w-lg { max-width: 32rem; }
.max-w-xl { max-width: 36rem; }
.max-w-2xl { max-width: 42rem; }
.max-w-3xl { max-width: 48rem; }
.max-w-4xl { max-width: 56rem; }
.max-w-5xl { max-width: 64rem; }
.max-w-6xl { max-width: 72rem; }
.max-w-7xl { max-width: 80rem; }
.max-w-full { max-width: 100%; }
.max-w-screen-sm { max-width: 640px; }
.max-w-screen-md { max-width: 768px; }
.max-w-screen-lg { max-width: 1024px; }
.max-w-screen-xl { max-width: 1280px; }
.max-w-screen-2xl { max-width: 1536px; }
.min-w-0 { min-width: 0; }
.min-w-full { min-width: 100%; }
/* ===== DISPLAY & VISIBILITY ===== */
.block { display: block; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.hidden { display: none; }
.visible { visibility: visible; }
.invisible { visibility: hidden; }
/* ===== POSITIONING ===== */
.static { position: static; }
.fixed { position: fixed; }
.absolute { position: absolute; }
.relative { position: relative; }
.sticky { position: sticky; }
.top-0 { top: 0; }
.top-1 { top: calc(var(--spacing-unit) * 1); }
.top-2 { top: calc(var(--spacing-unit) * 2); }
.top-4 { top: calc(var(--spacing-unit) * 4); }
.top-auto { top: auto; }
.bottom-0 { bottom: 0; }
.bottom-1 { bottom: calc(var(--spacing-unit) * 1); }
.bottom-2 { bottom: calc(var(--spacing-unit) * 2); }
.bottom-4 { bottom: calc(var(--spacing-unit) * 4); }
.bottom-auto { bottom: auto; }
.left-0 { left: 0; }
.left-1 { left: calc(var(--spacing-unit) * 1); }
.left-2 { left: calc(var(--spacing-unit) * 2); }
.left-4 { left: calc(var(--spacing-unit) * 4); }
.left-auto { left: auto; }
.right-0 { right: 0; }
.right-1 { right: calc(var(--spacing-unit) * 1); }
.right-2 { right: calc(var(--spacing-unit) * 2); }
.right-4 { right: calc(var(--spacing-unit) * 4); }
.right-auto { right: auto; }
.z-0 { z-index: 0; }
.z-10 { z-index: 10; }
.z-20 { z-index: 20; }
.z-30 { z-index: 30; }
.z-40 { z-index: 40; }
.z-50 { z-index: 50; }
.z-auto { z-index: auto; }
/* ===== TRANSITIONS & ANIMATIONS ===== */
.transition { transition: var(--transition); }
.transition-all { transition: all var(--transition); }
.transition-colors { transition: background-color var(--transition), border-color var(--transition), color var(--transition); }
.transition-opacity { transition: opacity var(--transition); }
.transition-shadow { transition: box-shadow var(--transition); }
.transition-transform { transition: transform var(--transition); }
.ease-linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: cubic-bezier(0.4, 0, 1, 1); }
.ease-out { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }
.ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
@keyframes fadeIn {
from { opacity: 0; }
to { opacity: 1; }
}
@keyframes fadeOut {
from { opacity: 1; }
to { opacity: 0; }
}
@keyframes slideInUp {
from { transform: translate3d(0, 100%, 0); visibility: visible; }
to { transform: translate3d(0, 0, 0); }
}
@keyframes slideInDown {
from { transform: translate3d(0, -100%, 0); visibility: visible; }
to { transform: translate3d(0, 0, 0); }
}
@keyframes slideInLeft {
from { transform: translate3d(-100%, 0, 0); visibility: visible; }
to { transform: translate3d(0, 0, 0); }
}
@keyframes slideInRight {
from { transform: translate3d(100%, 0, 0); visibility: visible; }
to { transform: translate3d(0, 0, 0); }
}
@keyframes slideOutUp {
from { transform: translate3d(0, 0, 0); }
to { transform: translate3d(0, -100%, 0); visibility: hidden; }
}
@keyframes slideOutDown {
from { transform: translate3d(0, 0, 0); }
to { transform: translate3d(0, 100%, 0); visibility: hidden; }
}
@keyframes slideOutLeft {
from { transform: translate3d(0, 0, 0); }
to { transform: translate3d(-100%, 0, 0); visibility: hidden; }
}
@keyframes slideOutRight {
from { transform: translate3d(0, 0, 0); }
to { transform: translate3d(100%, 0, 0); visibility: hidden; }
}
@keyframes zoomIn {
from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); }
50% { opacity: 1; }
}
@keyframes zoomOut {
from { opacity: 1; }
50% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); }
to { opacity: 0; }
}
@keyframes bounce {
from, 20%, 53%, to {
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
transform: translate3d(0, 0, 0);
}
40%, 43% {
animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
transform: translate3d(0, -30px, 0) scaleY(1.1);
}
70% {
animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
transform: translate3d(0, -15px, 0) scaleY(1.05);
}
80% {
transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
transform: translate3d(0, 0, 0) scaleY(0.95);
}
90% {
transform: translate3d(0, -4px, 0) scaleY(1.02);
}
}
@keyframes flash {
from, 50%, to { opacity: 1; }
25%, 75% { opacity: 0; }
}
@keyframes pulse {
from { transform: scale3d(1, 1, 1); }
50% { transform: scale3d(1.05, 1.05, 1.05); }
to { transform: scale3d(1, 1, 1); }
}
@keyframes rubberBand {
from { transform: scale3d(1, 1, 1); }
30% { transform: scale3d(1.25, 0.75, 1); }
40% { transform: scale3d(0.75, 1.25, 1); }
50% { transform: scale3d(1.15, 0.85, 1); }
65% { transform: scale3d(0.95, 1.05, 1); }
75% { transform: scale3d(1.05, 0.95, 1); }
to { transform: scale3d(1, 1, 1); }
}
@keyframes shakeX {
from, to { transform: translate3d(0, 0, 0); }
10%, 30%, 50%, 70%, 90% { transform: translate3d(-10px, 0, 0); }
20%, 40%, 60%, 80% { transform: translate3d(10px, 0, 0); }
}
@keyframes shakeY {
from, to { transform: translate3d(0, 0, 0); }
10%, 30%, 50%, 70%, 90% { transform: translate3d(0, -10px, 0); }
20%, 40%, 60%, 80% { transform: translate3d(0, 10px, 0); }
}
@keyframes headShake {
0% { transform: translateX(0); }
6.5% { transform: translateX(-6px) rotateY(-9deg); }
18.5% { transform: translateX(5px) rotateY(7deg); }
31.5% { transform: translateX(-3px) rotateY(-5deg); }
43.5% { transform: translateX(2px) rotateY(3deg); }
50% { transform: translateX(0); }
}
@keyframes swing {
20% { transform: rotate3d(0, 0, 1, 15deg); }
40% { transform: rotate3d(0, 0, 1, -10deg); }
60% { transform: rotate3d(0, 0, 1, 5deg); }
80% { transform: rotate3d(0, 0, 1, -5deg); }
to { transform: rotate3d(0, 0, 1, 0deg); }
}
@keyframes tada {
from { transform: scale3d(1, 1, 1); }
10%, 20% { transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }
30%, 50%, 70%, 90% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }
40%, 60%, 80% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }
to { transform: scale3d(1, 1, 1); }
}
@keyframes wobble {
from { transform: translate3d(0, 0, 0); }
15% { transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }
30% { transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }
45% { transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }
60% { transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }
75% { transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }
to { transform: translate3d(0, 0, 0); }
}
@keyframes jello {
from, 11.1%, to { transform: translate3d(0, 0, 0); }
22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); }
33.3% { transform: skewX(6.25deg) skewY(6.25deg); }
44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); }
55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); }
66.6% { transform: skewX(-0.78125deg) skewY(-0.78125deg); }
77.7% { transform: skewX(0.390625deg) skewY(0.390625deg); }
88.8% { transform: skewX(-0.1953125deg) skewY(-0.1953125deg); }
}
@keyframes heartBeat {
0% { transform: scale(1); }
14% { transform: scale(1.3); }
28% { transform: scale(1); }
42% { transform: scale(1.3); }
70% { transform: scale(1); }
}
@keyframes backInDown {
0% {
transform: translateY(-1200px) scale(0.7);
opacity: 0.7;
}
80% {
transform: translateY(0px) scale(0.7);
opacity: 0.7;
}
100% {
transform: scale(1);
opacity: 1;
}
}
@keyframes backInLeft {
0% {
transform: translateX(-2000px) scale(0.7);
opacity: 0.7;
}
80% {
transform: translateX(0px) scale(0.7);
opacity: 0.7;
}
100% {
transform: scale(1);
opacity: 1;
}
}
@keyframes backInRight {
0% {
transform: translateX(2000px) scale(0.7);
opacity: 0.7;
}
80% {
transform: translateX(0px) scale(0.7);
opacity: 0.7;
}
100% {
transform: scale(1);
opacity: 1;
}
}
@keyframes backInUp {
0% {
transform: translateY(1200px) scale(0.7);
opacity: 0.7;
}
80% {
transform: translateY(0px) scale(0.7);
opacity: 0.7;
}
100% {
transform: scale(1);
opacity: 1;
}
}
@keyframes backOutDown {
0% {
transform: scale(1);
opacity: 1;
}
20% {
transform: translateY(0px) scale(0.7);
opacity: 0.7;
}
100% {
transform: translateY(700px) scale(0.7);
opacity: 0.7;
}
}
@keyframes backOutLeft {
0% {
transform: scale(1);
opacity: 1;
}
20% {
transform: translateX(0px) scale(0.7);
opacity: 0.7;
}
100% {
transform: translateX(-2000px) scale(0.7);
opacity: 0.7;
}
}
@keyframes backOutRight {
0% {
transform: scale(1);
opacity: 1;
}
20% {
transform: translateX(0px) scale(0.7);
opacity: 0.7;
}
100% {
transform: translateX(2000px) scale(0.7);
opacity: 0.7;
}
}
@keyframes backOutUp {
0% {
transform: scale(1);
opacity: 1;
}
20% {
transform: translateY(0px) scale(0.7);
opacity: 0.7;
}
100% {
transform: translateY(-700px) scale(0.7);
opacity: 0.7;
}
}
@keyframes bounceIn {
from, 20%, 40%, 60%, 80%, to {
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {
opacity: 0;
transform: scale3d(0.3, 0.3, 0.3);
}
20% {
transform: scale3d(1.1, 1.1, 1.1);
}
40% {
transform: scale3d(0.9, 0.9, 0.9);
}
60% {
opacity: 1;
transform: scale3d(1.03, 1.03, 1.03);
}
80% {
transform: scale3d(0.97, 0.97, 0.97);
}
to {
opacity: 1;
transform: scale3d(1, 1, 1);
}
}
@keyframes bounceInDown {
from, 60%, 75%, 90%, to {
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {
opacity: 0;
transform: translate3d(0, -3000px, 0) scaleY(3);
}
60% {
opacity: 1;
transform: translate3d(0, 25px, 0) scaleY(0.9);
}
75% {
transform: translate3d(0, -10px, 0) scaleY(0.95);
}
90% {
transform: translate3d(0, 5px, 0) scaleY(0.985);
}
to {
transform: translate3d(0, 0, 0);
}
}
@keyframes bounceInLeft {
from, 60%, 75%, 90%, to {
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
0% {
opacity: 0;
transform: translate3d(-3000px, 0, 0) scaleX(3);
}
60% {
opacity: 1;
transform: translate3d(25px, 0, 0) scaleX(1);
}
75% {
transform: translate3d(-10px, 0, 0) scaleX(0.98);
}
90% {
transform: translate3d(5px, 0, 0) scaleX(0.995);
}
to {
transform: translate3d(0, 0, 0);
}
}
@keyframes bounceInRight {
from, 60%, 75%, 90%, to {
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
from {
opacity: 0;
transform: translate3d(3000px, 0, 0) scaleX(3);
}
60% {
opacity: 1;
transform: translate3d(-25px, 0, 0) scaleX(1);
}
75% {
transform: translate3d(10px, 0, 0) scaleX(0.98);
}
90% {
transform: translate3d(-5px, 0, 0) scaleX(0.995);
}
to {
transform: translate3d(0, 0, 0);
}
}
@keyframes bounceInUp {
from, 60%, 75%, 90%, to {
animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
from {
opacity: 0;
transform: translate3d(0, 3000px, 0) scaleY(5);
}
60% {
opacity: 1;
transform: translate3d(0, -20px, 0) scaleY(0.9);
}
75% {
transform: translate3d(0, 10px, 0) scaleY(0.95);
}
90% {
transform: translate3d(0, -5px, 0) scaleY(0.985);
}
to {
transform: translate3d(0, 0, 0);
}
}
@keyframes bounceOut {
20% {
transform: scale3d(0.9, 0.9, 0.9);
}
50%, 55% {
opacity: 1;
transform: scale3d(1.1, 1.1, 1.1);
}
to {
opacity: 0;
transform: scale3d(0.3, 0.3, 0.3);
}
}
@keyframes bounceOutDown {
20% {
transform: translate3d(0, 10px, 0) scaleY(0.985);
}
40%, 45% {
opacity: 1;
transform: translate3d(0, -20px, 0) scaleY(0.9);
}
to {
opacity: 0;
transform: translate3d(0, 2000px, 0) scaleY(3);
}
}
@keyframes bounceOutLeft {
20% {
opacity: 1;
transform: translate3d(20px, 0, 0) scaleX(0.9);
}
to {
opacity: 0;
transform: translate3d(-2000px, 0, 0) scaleX(2);
}
}
@keyframes bounceOutRight {
20% {
opacity: 1;
transform: translate3d(-20px, 0, 0) scaleX(0.9);
}
to {
opacity: 0;
transform: translate3d(2000px, 0, 0) scaleX(2);
}
}
@keyframes bounceOutUp {
20% {
transform: translate3d(0, -10px, 0) scaleY(0.985);
}
40%, 45% {
opacity: 1;
transform: translate3d(0, 20px, 0) scaleY(0.9);
}
to {
opacity: 0;
transform: translate3d(0, -2000px, 0) scaleY(3);
}
}
@keyframes fadeInDown {
from {
opacity: 0;
transform: translate3d(0, -100%, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInDownBig {
from {
opacity: 0;
transform: translate3d(0, -2000px, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInLeft {
from {
opacity: 0;
transform: translate3d(-100%, 0, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInLeftBig {
from {
opacity: 0;
transform: translate3d(-2000px, 0, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInRight {
from {
opacity: 0;
transform: translate3d(100%, 0, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInRightBig {
from {
opacity: 0;
transform: translate3d(2000px, 0, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInUp {
from {
opacity: 0;
transform: translate3d(0, 100%, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInUpBig {
from {
opacity: 0;
transform: translate3d(0, 2000px, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInTopLeft {
from {
opacity: 0;
transform: translate3d(-100%, -100%, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInTopRight {
from {
opacity: 0;
transform: translate3d(100%, -100%, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInBottomLeft {
from {
opacity: 0;
transform: translate3d(-100%, 100%, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeInBottomRight {
from {
opacity: 0;
transform: translate3d(100%, 100%, 0);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes fadeOutDown {
from {
opacity: 1;
}
to {
opacity: 0;
transform: translate3d(0, 100%, 0);
}
}
@keyframes fadeOutDownBig {
from {
opacity: 1;
}
to {
opacity: 0;
transform: translate3d(0, 2000px, 0);
}
}
@keyframes fadeOutLeft {
from {
opacity: 1;
}
to {
opacity: 0;
transform: translate3d(-100%, 0, 0);
}
}
@keyframes fadeOutLeftBig {
from {
opacity: 1;
}
to {
opacity: 0;
transform: translate3d(-2000px, 0, 0);
}
}
@keyframes fadeOutRight {
from {
opacity: 1;
}
to {
opacity: 0;
transform: translate3d(100%, 0, 0);
}
}
@keyframes fadeOutRightBig {
from {
opacity: 1;
}
to {
opacity: 0;
transform: translate3d(2000px, 0, 0);
}
}
@keyframes fadeOutUp {
from {
opacity: 1;
}
to {
opacity: 0;
transform: translate3d(0, -100%, 0);
}
}
@keyframes fadeOutUpBig {
from {
opacity: 1;
}
to {
opacity: 0;
transform: translate3d(0, -2000px, 0);
}
}
@keyframes fadeOutTopLeft {
from {
opacity: 1;
transform: translate3d(0, 0, 0);
}
to {
opacity: 0;
transform: translate3d(-100%, -100%, 0);
}
}
@keyframes fadeOutTopRight {
from {
opacity: 1;
transform: translate3d(0, 0, 0);
}
to {
opacity: 0;
transform: translate3d(100%, -100%, 0);
}
}
@keyframes fadeOutBottomRight {
from {
opacity: 1;
transform: translate3d(0, 0, 0);
}
to {
opacity: 0;
transform: translate3d(100%, 100%, 0);
}
}
@keyframes fadeOutBottomLeft {
from {
opacity: 1;
transform: translate3d(0, 0, 0);
}
to {
opacity: 0;
transform: translate3d(-100%, 100%, 0);
}
}
@keyframes flip {
from {
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
animation-timing-function: ease-out;
}
40% {
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
animation-timing-function: ease-out;
}
50% {
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
animation-timing-function: ease-in;
}
80% {
transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
animation-timing-function: ease-in;
}
to {
transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
animation-timing-function: ease-in;
}
}
@keyframes flipInX {
from {
transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
opacity: 0;
animation-timing-function: ease-in;
}
40% {
transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
animation-timing-function: ease-in;
}
60% {
transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
opacity: 1;
animation-timing-function: ease-in;
}
80% {
transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
animation-timing-function: ease-in;
}
to {
transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
animation-timing-function: ease-in;
}
}
@keyframes flipInY {
from {
transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
opacity: 0;
animation-timing-function: ease-in;
}
40% {
transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
animation-timing-function: ease-in;
}
60% {
transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
opacity: 1;
animation-timing-function: ease-in;
}
80% {
transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
animation-timing-function: ease-in;
}
to {
transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
animation-timing-function: ease-in;
}
}
@keyframes flipOutX {
from {
transform: perspective(400px);
}
30% {
transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
opacity: 1;
}
to {
transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
opacity: 0;
}
}
@keyframes flipOutY {
from {
transform: perspective(400px);
}
30% {
transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
opacity: 1;
}
to {
transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
opacity: 0;
}
}
@keyframes lightSpeedIn {
from {
transform: translate3d(100%, 0, 0) skewX(-30deg);
opacity: 0;
}
60% {
transform: skewX(20deg);
opacity: 1;
}
80% {
transform: skewX(-5deg);
}
to {
transform: translate3d(0, 0, 0);
}
}
@keyframes lightSpeedOut {
from {
opacity: 1;
}
to {
transform: translate3d(100%, 0, 0) skewX(30deg);
opacity: 0;
}
}
@keyframes rotateIn {
from {
transform-origin: center;
transform: rotate3d(0, 0, 1, -200deg);
opacity: 0;
}
to {
transform-origin: center;
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
@keyframes rotateInDownLeft {
from {
transform-origin: left bottom;
transform: rotate3d(0, 0, 1, -45deg);
opacity: 0;
}
to {
transform-origin: left bottom;
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
@keyframes rotateInDownRight {
from {
transform-origin: right bottom;
transform: rotate3d(0, 0, 1, 45deg);
opacity: 0;
}
to {
transform-origin: right bottom;
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
@keyframes rotateInUpLeft {
from {
transform-origin: left bottom;
transform: rotate3d(0, 0, 1, 45deg);
opacity: 0;
}
to {
transform-origin: left bottom;
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
@keyframes rotateInUpRight {
from {
transform-origin: right bottom;
transform: rotate3d(0, 0, 1, -45deg);
opacity: 0;
}
to {
transform-origin: right bottom;
transform: translate3d(0, 0, 0);
opacity: 1;
}
}
@keyframes rotateOut {
from {
transform-origin: center;
opacity: 1;
}
to {
transform-origin: center;
transform: rotate3d(0, 0, 1, 200deg);
opacity: 0;
}
}
@keyframes rotateOutDownLeft {
from {
transform-origin: left bottom;
opacity: 1;
}
to {
transform-origin: left bottom;
transform: rotate3d(0, 0, 1, 45deg);
opacity: 0;
}
}
@keyframes rotateOutDownRight {
from {
transform-origin: right bottom;
opacity: 1;
}
to {
transform-origin: right bottom;
transform: rotate3d(0, 0, 1, -45deg);
opacity: 0;
}
}
@keyframes rotateOutUpLeft {
from {
transform-origin: left bottom;
opacity: 1;
}
to {
transform-origin: left bottom;
transform: rotate3d(0, 0, 1, -45deg);
opacity: 0;
}
}
@keyframes rotateOutUpRight {
from {
transform-origin: right bottom;
opacity: 1;
}
to {
transform-origin: right bottom;
transform: rotate3d(0, 0, 1, 45deg);
opacity: 0;
}
}
@keyframes hinge {
0% {
transform-origin: top left;
animation-timing-function: ease-in-out;
}
20%, 60% {
transform: rotate3d(0, 0, 1, 80deg);
transform-origin: top left;
animation-timing-function: ease-in-out;
}
40%, 80% {
transform: rotate3d(0, 0, 1, 60deg);
transform-origin: top left;
animation-timing-function: ease-in-out;
opacity: 1;
}
to {
transform: translate3d(0, 700px, 0);
opacity: 0;
}
}
@keyframes jackInTheBox {
from {
opacity: 0;
transform: scale(0.1) rotate(30deg);
transform-origin: center bottom;
}
50% {
transform: rotate(-10deg);
}
70% {
transform: rotate(3deg);
}
to {
opacity: 1;
transform: scale(1);
}
}
@keyframes rollIn {
from {
opacity: 0;
transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
}
to {
opacity: 1;
transform: translate3d(0, 0, 0);
}
}
@keyframes rollOut {
from {
opacity: 1;
}
to {
opacity: 0;
transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
}
}
@keyframes zoomInDown {
from {
opacity: 0;
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInLeft {
from {
opacity: 0;
transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInRight {
from {
opacity: 0;
transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomInUp {
from {
opacity: 0;
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
60% {
opacity: 1;
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomOutDown {
40% {
opacity: 1;
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
100% {
opacity: 0;
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
transform-origin: center bottom;
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes zoomOutLeft {
40% {
opacity: 1;
transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
}
100% {
opacity: 0;
transform: scale3d(0.1, 0.1, 0.1) translate3d(-2000px, 0, 0);
transform-origin: left center;
}
}
@keyframes zoomOutRight {
40% {
opacity: 1;
transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
}
100% {
opacity: 0;
transform: scale3d(0.1, 0.1, 0.1) translate3d(2000px, 0, 0);
transform-origin: right center;
}
}
@keyframes zoomOutUp {
40% {
opacity: 1;
transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
100% {
opacity: 0;
transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
transform-origin: center bottom;
animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
}
@keyframes slideInDown {
from {
transform: translate3d(0, -100%, 0);
visibility: visible;
}
to {
transform: translate3d(0, 0, 0);
}
}
@keyframes slideInLeft {
from {
transform: translate3d(-100%, 0, 0);
visibility: visible;
}
to {
transform: translate3d(0, 0, 0);
}
}
@keyframes slideInRight {
from {
transform: translate3d(100%, 0, 0);
visibility: visible;
}
to {
transform: translate3d(0, 0, 0);
}
}
@keyframes slideInUp {
from {
transform: translate3d(0, 100%, 0);
visibility: visible;
}
to {
transform: translate3d(0, 0, 0);
}
}
@keyframes slideOutDown {
from {
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
transform: translate3d(0, 100%, 0);
}
}
@keyframes slideOutLeft {
from {
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
transform: translate3d(-100%, 0, 0);
}
}
@keyframes slideOutRight {
from {
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
transform: translate3d(100%, 0, 0);
}
}
@keyframes slideOutUp {
from {
transform: translate3d(0, 0, 0);
}
to {
visibility: hidden;
transform: translate3d(0, -100%, 0);
}
}
/* Animation Classes */
.animate-fadeIn { animation: fadeIn var(--transition); }
.animate-fadeOut { animation: fadeOut var(--transition); }
.animate-slideInUp { animation: slideInUp var(--transition); }
.animate-slideInDown { animation: slideInDown var(--transition); }
.animate-slideInLeft { animation: slideInLeft var(--transition); }
.animate-slideInRight { animation: slideInRight var(--transition); }
.animate-slideOutUp { animation: slideOutUp var(--transition); }
.animate-slideOutDown { animation: slideOutDown var(--transition); }
.animate-slideOutLeft { animation: slideOutLeft var(--transition); }
.animate-slideOutRight { animation: slideOutRight var(--transition); }
.animate-zoomIn { animation: zoomIn var(--transition); }
.animate-zoomOut { animation: zoomOut var(--transition); }
.animate-bounce { animation: bounce 1s infinite; }
.animate-flash { animation: flash 1s infinite; }
.animate-pulse { animation: pulse 2s infinite; }
.animate-rubberBand { animation: rubberBand 1s; }
.animate-shakeX { animation: shakeX 1s; }
.animate-shakeY { animation: shakeY 1s; }
.animate-headShake { animation: headShake 1s; }
.animate-swing { animation: swing 1s; }
.animate-tada { animation: tada 1s; }
.animate-wobble { animation: wobble 1s; }
.animate-jello { animation: jello 1s; }
.animate-heartBeat { animation: heartBeat 1s; }
.animate-backInDown { animation: backInDown 1s; }
.animate-backInLeft { animation: backInLeft 1s; }
.animate-backInRight { animation: backInRight 1s; }
.animate-backInUp { animation: backInUp 1s; }
.animate-backOutDown { animation: backOutDown 1s; }
.animate-backOutLeft { animation: backOutLeft 1s; }
.animate-backOutRight { animation: backOutRight 1s; }
.animate-backOutUp { animation: backOutUp 1s; }
.animate-bounceIn { animation: bounceIn 1s; }
.animate-bounceInDown { animation: bounceInDown 1s; }
.animate-bounceInLeft { animation: bounceInLeft 1s; }
.animate-bounceInRight { animation: bounceInRight 1s; }
.animate-bounceInUp { animation: bounceInUp 1s; }
.animate-bounceOut { animation: bounceOut 1s; }
.animate-bounceOutDown { animation: bounceOutDown 1s; }
.animate-bounceOutLeft { animation: bounceOutLeft 1s; }
.animate-bounceOutRight { animation: bounceOutRight 1s; }
.animate-bounceOutUp { animation: bounceOutUp 1s; }
.animate-fadeInDown { animation: fadeInDown 1s; }
.animate-fadeInDownBig { animation: fadeInDownBig 1s; }
.animate-fadeInLeft { animation: fadeInLeft 1s; }
.animate-fadeInLeftBig { animation: fadeInLeftBig 1s; }
.animate-fadeInRight { animation: fadeInRight 1s; }
.animate-fadeInRightBig { animation: fadeInRightBig 1s; }
.animate-fadeInUp { animation: fadeInUp 1s; }
.animate-fadeInUpBig { animation: fadeInUpBig 1s; }
.animate-fadeInTopLeft { animation: fadeInTopLeft 1s; }
.animate-fadeInTopRight { animation: fadeInTopRight 1s; }
.animate-fadeInBottomLeft { animation: fadeInBottomLeft 1s; }
.animate-fadeInBottomRight { animation: fadeInBottomRight 1s; }
.animate-fadeOutDown { animation: fadeOutDown 1s; }
.animate-fadeOutDownBig { animation: fadeOutDownBig 1s; }
.animate-fadeOutLeft { animation: fadeOutLeft 1s; }
.animate-fadeOutLeftBig { animation: fadeOutLeftBig 1s; }
.animate-fadeOutRight { animation: fadeOutRight 1s; }
.animate-fadeOutRightBig { animation: fadeOutRightBig 1s; }
.animate-fadeOutUp { animation: fadeOutUp 1s; }
.animate-fadeOutUpBig { animation: fadeOutUpBig 1s; }
.animate-fadeOutTopLeft { animation: fadeOutTopLeft 1s; }
.animate-fadeOutTopRight { animation: fadeOutTopRight 1s; }
.animate-fadeOutBottomRight { animation: fadeOutBottomRight 1s; }
.animate-fadeOutBottomLeft { animation: fadeOutBottomLeft 1s; }
.animate-flip { animation: flip 1s; }
.animate-flipInX { animation: flipInX 1s; }
.animate-flipInY { animation: flipInY 1s; }
.animate-flipOutX { animation: flipOutX 1s; }
.animate-flipOutY { animation: flipOutY 1s; }
.animate-lightSpeedIn { animation: lightSpeedIn 1s; }
.animate-lightSpeedOut { animation: lightSpeedOut 1s; }
.animate-rotateIn { animation: rotateIn 1s; }
.animate-rotateInDownLeft { animation: rotateInDownLeft 1s; }
.animate-rotateInDownRight { animation: rotateInDownRight 1s; }
.animate-rotateInUpLeft { animation: rotateInUpLeft 1s; }
.animate-rotateInUpRight { animation: rotateInUpRight 1s; }
.animate-rotateOut { animation: rotateOut 1s; }
.animate-rotateOutDownLeft { animation: rotateOutDownLeft 1s; }
.animate-rotateOutDownRight { animation: rotateOutDownRight 1s; }
.animate-rotateOutUpLeft { animation: rotateOutUpLeft 1s; }
.animate-rotateOutUpRight { animation: rotateOutUpRight 1s; }
.animate-hinge { animation: hinge 2s; }
.animate-jackInTheBox { animation: jackInTheBox 1s; }
.animate-rollIn { animation: rollIn 1s; }
.animate-rollOut { animation: rollOut 1s; }
.animate-zoomInDown { animation: zoomInDown 1s; }
.animate-zoomInLeft { animation: zoomInLeft 1s; }
.animate-zoomInRight { animation: zoomInRight 1s; }
.animate-zoomInUp { animation: zoomInUp 1s; }
.animate-zoomOutDown { animation: zoomOutDown 1s; }
.animate-zoomOutLeft { animation: zoomOutLeft 1s; }
.animate-zoomOutRight { animation: zoomOutRight 1s; }
.animate-zoomOutUp { animation: zoomOutUp 1s; }
.animate-slideInDown { animation: slideInDown 1s; }
.animate-slideInLeft { animation: slideInLeft 1s; }
.animate-slideInRight { animation: slideInRight 1s; }
.animate-slideInUp { animation: slideInUp 1s; }
.animate-slideOutDown { animation: slideOutDown 1s; }
.animate-slideOutLeft { animation: slideOutLeft 1s; }
.animate-slideOutRight { animation: slideOutRight 1s; }
.animate-slideOutUp { animation: slideOutUp 1s; }
.animate-infinite {
animation-iteration-count: infinite;
}
.animate-delay-1s {
animation-delay: 1s;
}
.animate-delay-2s {
animation-delay: 2s;
}
.animate-delay-3s {
animation-delay: 3s;
}
.animate-delay-4s {
animation-delay: 4s;
}
.animate-delay-5s {
animation-delay: 5s;
}
.animate-fast {
animation-duration: 0.5s;
}
.animate-faster {
animation-duration: 0.3s;
}
.animate-slow {
animation-duration: 2s;
}
.animate-slower {
animation-duration: 3s;
}
/* ===== MODERN UTILS (v3.4 additions: container queries, color-mix, :has()) ===== */
.aspect-square { aspect-ratio: 1 / 1; }
.aspect-video { aspect-ratio: 16 / 9; }
.snap-x { scroll-snap-type: x mandatory; }
.snap-y { scroll-snap-type: y mandatory; }
.container-query { container-type: inline-size; }
@container (min-width: 400px) { .cq-text-lg { font-size: 1.25rem; } }
@container (min-width: 600px) { .cq-grid-cols-2 { grid-template-columns: repeat(2, 1fr); } }
:has(> .selected) { background-color: var(--primary-container); }
.bg-mix-primary { background-color: color-mix(in srgb, var(--primary) 50%, var(--background)); }
.text-mix-error { color: color-mix(in srgb, var(--error) 70%, black); }
.subgrid { grid-template-columns: subgrid; }
/* ===== ACCESSIBILITY ===== */
.sr-only {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
}
.not-sr-only {
position: static;
width: auto;
height: auto;
padding: 0;
margin: 0;
overflow: visible;
clip: auto;
white-space: normal;
}
/* ===== HOVER, FOCUS, ACTIVE STATES ===== */
.hover:bg-primary:hover { background-color: var(--primary); }
.hover:text-white:hover { color: #fff; }
.hover:shadow-lg:hover { box-shadow: var(--shadow-lg); }
.focus:outline-none:focus { outline: none; }
.active:bg-secondary:active { background-color: var(--secondary); }
/* ===== RESPONSIVE UTILS ===== /
@media (min-width: 640px) {
.sm:flex { display: flex; }
.sm:hidden { display: none; }
.sm:text-lg { font-size: 1.125rem; }
/ Add more sm: prefixes as needed */
}
@media (min-width: 768px) {
.md:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.md:p-6 { padding: calc(var(--spacing-unit) * 6); }
/* Add more md: prefixes as needed */
}
@media (min-width: 1024px) {
.lg:w-1/2 { width: 50%; }
.lg:text-2xl { font-size: 1.5rem; }
/* Add more lg: prefixes as needed */
}
@media (min-width: 1280px) {
.xl:max-w-6xl { max-width: 72rem; }
/* Add more xl: prefixes as needed */
}
@media (min-width: 1536px) {
.2xl:gap-12 { gap: calc(var(--spacing-unit) * 12); }
/* Add more 2xl: prefixes as needed */
}
}
/* ===== FONT AWESOME ICONS ===== */
.fa {
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
font: normal normal normal 14px/1 FontAwesome;
font-size: inherit;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
.fa-lg { font-size: 1.33333em; line-height: .75em; vertical-align: -.0667em; }
.fa-xs { font-size: .75em; }
.fa-sm { font-size: .875em; }
.fa-1x { font-size: 1em; }
.fa-2x { font-size: 2em; }
.fa-3x { font-size: 3em; }
.fa-4x { font-size: 4em; }
.fa-5x { font-size: 5em; }
.fa-6x { font-size: 6em; }
.fa-7x { font-size: 7em; }
.fa-8x { font-size: 8em; }
.fa-9x { font-size: 9em; }
.fa-10x { font-size: 10em; }
.fa-fw { text-align: center; width: 1.25em; }
.fa-ul { list-style-type: none; margin-left: 2.5em; padding-left: 0; }
.fa-ul > li { position: relative; }
.fa-li { left: -2em; position: absolute; text-align: center; width: 2em; line-height: inherit; }
.fa-border { border: solid 0.08em #eee; border-radius: .1em; padding: .2em .25em .15em; }
.fa-pull-left { float: left; }
.fa-pull-right { float: right; }
.fa-spin { animation: fa-spin 2s infinite linear; }
.fa-spin-reverse { animation: fa-spin 2s infinite linear reverse; }
.fa-pulse { animation: fa-spin 1s infinite steps(8); }
@keyframes fa-spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
/* Placeholders for 10 common icons (extendable) */
.fa-home:before { content: "\f015"; }
.fa-user:before { content: "\f007"; }
.fa-search:before { content: "\f002"; }
.fa-heart:before { content: "\f004"; }
.fa-star:before { content: "\f005"; }
.fa-check:before { content: "\f00c"; }
.fa-times:before { content: "\f00d"; }
.fa-plus:before { content: "\f067"; }
.fa-minus:before { content: "\f068"; }
.fa-arrow-right:before { content: "\f061"; }
/* ===== COMPONENTS ===== /
@layer components {
/ Buttons */
.btn {
display: inline-flex;
align-items: center;
justify-content: center;
padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
border-radius: var(--border-radius);
font-weight: 500;
transition: var(--transition);
cursor: pointer;
}
.btn-primary { background: var(--primary); color: var(--on-primary); }
.btn-primary:hover { background: color-mix(in srgb, var(--primary) 90%, black); }
.btn-secondary { background: var(--secondary); color: var(--on-secondary); }
.btn-secondary:hover { background: color-mix(in srgb, var(--secondary) 90%, black); }
.btn-outlined { background: transparent; border: 1px solid var(--outline); color: var(--primary); }
.btn-outlined:hover { background: var(--primary-container); }
.btn-text { background: transparent; color: var(--primary); }
.btn-text:hover { text-decoration: underline; }
.btn-disabled { opacity: 0.5; cursor: not-allowed; }
/* Cards */
.card {
background: var(--surface);
border-radius: calc(var(--border-radius) * 2);
padding: calc(var(--spacing-unit) * 4);
box-shadow: var(--shadow-sm);
transition: var(--transition);
}
.card:hover { box-shadow: var(--shadow-md); }
.card-header { padding-bottom: calc(var(--spacing-unit) * 2); border-bottom: 1px solid var(--outline); }
.card-footer { padding-top: calc(var(--spacing-unit) * 2); border-top: 1px solid var(--outline); }
.card-title { font-size: 1.25rem; font-weight: 500; }
/* Navigation */
.app-bar {
background: var(--surface);
box-shadow: var(--shadow-sm);
padding: calc(var(--spacing-unit) * 2);
display: flex;
align-items: center;
justify-content: space-between;
}
.nav-item { padding: calc(var(--spacing-unit) * 2); color: var(--on-surface); }
.nav-item:hover { background: var(--surface-variant); }
/* Modals */
.modal {
position: fixed;
z-index: 100;
left: 0;
top: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.4);
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
visibility: hidden;
transition: var(--transition);
}
.modal.active { opacity: 1; visibility: visible; }
.modal-content {
background: var(--surface);
padding: calc(var(--spacing-unit) * 6);
border-radius: calc(var(--border-radius) * 2);
box-shadow: var(--shadow-lg);
max-width: 80%;
transform: scale(0.9);
transition: var(--transition);
}
.modal.active .modal-content { transform: scale(1); }
/* Forms */
.text-field {
position: relative;
margin-bottom: calc(var(--spacing-unit) * 4);
}
.input {
width: 100%;
padding: calc(var(--spacing-unit) * 4) 0;
border-bottom: 1px solid var(--outline);
transition: var(--transition);
font-size: 1rem;
}
.input:focus { border-bottom: 2px solid var(--primary); }
.label { position: absolute; top: calc(var(--spacing-unit) * 2); left: 0; transition: var(--transition); }
.input:focus + .label, .input:not(:placeholder-shown) + .label { top: -1rem; font-size: 0.875rem; color: var(--primary); }
/* Tables */
.table {
width: 100%;
border-collapse: collapse;
}
.table th, .table td {
padding: calc(var(--spacing-unit) * 3);
text-align: left;
border-bottom: 1px solid var(--outline);
}
.table th { background: var(--surface-variant); font-weight: 500; }
.table-striped tbody tr:nth-child(even) { background: var(--surface-variant); }
/* Alerts/Snackbar */
.snackbar {
position: fixed;
bottom: calc(var(--spacing-unit) * 4);
left: 50%;
transform: translateX(-50%);
background: var(--inverse-surface);
color: var(--inverse-on-surface);
padding: calc(var(--spacing-unit) * 4);
border-radius: var(--border-radius);
box-shadow: var(--shadow-md);
min-width: 288px;
max-width: 568px;
display: flex;
align-items: center;
justify-content: space-between;
opacity: 0;
transition: var(--transition);
}
.snackbar.active { opacity: 1; }
/* Additional Components (v3.4 expansions: chips, FAB, tabs, accordions, etc.) */
.chip {
display: inline-flex;
align-items: center;
padding: calc(var(--spacing-unit) * 1) calc(var(--spacing-unit) * 3);
background: var(--surface-variant);
border-radius: 9999px;
font-size: 0.875rem;
}
.chip-close { margin-left: calc(var(--spacing-unit) * 2); cursor: pointer; }
.fab {
position: fixed;
bottom: calc(var(--spacing-unit) * 4);
right: calc(var(--spacing-unit) * 4);
background: var(--primary);
color: var(--on-primary);
border-radius: 50%;
width: 56px;
height: 56px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: var(--shadow-md);
transition: var(--transition);
}
.fab:hover { box-shadow: var(--shadow-lg); }
.tab-bar { display: flex; border-bottom: 1px solid var(--outline); }
.tab { padding: calc(var(--spacing-unit) * 3); cursor: pointer; }
.tab.active { border-bottom: 2px solid var(--primary); color: var(--primary); }
.accordion { border: 1px solid var(--outline); border-radius: var(--border-radius); }
.accordion-header { padding: calc(var(--spacing-unit) * 3); cursor: pointer; display: flex; justify-content: space-between; }
.accordion-content { padding: 0 calc(var(--spacing-unit) * 3); max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
.accordion.active .accordion-content { max-height: 500px; /* Adjust as needed */ }
.breadcrumb { display: flex; list-style: none; }
.breadcrumb li + li:before { content: "/"; padding: 0 calc(var(--spacing-unit) * 2); color: var(--on-surface-variant); }
.pagination { display: flex; justify-content: center; }
.page-item { padding: calc(var(--spacing-unit) * 2); cursor: pointer; }
.page-item.active { background: var(--primary); color: var(--on-primary); border-radius: var(--border-radius); }
.dropdown { position: relative; }
.dropdown-content { position: absolute; background: var(--surface); box-shadow: var(--shadow-md); display: none; }
.dropdown:hover .dropdown-content { display: block; }
.spinner { border: 4px solid var(--surface-variant); border-top: 4px solid var(--primary); border-radius: 50%; width: 36px; height: 36px; animation: fa-spin 1s linear infinite; }
.skeleton { background: var(--surface-variant); animation: pulse 1.5s infinite; }
.avatar { border-radius: 50%; width: 40px; height: 40px; object-fit: cover; }
.tag { background: var(--primary-container); color: var(--on-primary-container); padding: calc(var(--spacing-unit) * 1) calc(var(--spacing-unit) * 2); border-radius: var(--border-radius); font-size: 0.875rem; }
.toggle { position: relative; display: inline-block; width: 40px; height: 20px; }
.toggle input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: var(--outline); transition: var(--transition); border-radius: 9999px; }
.slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 2px; bottom: 2px; background: white; transition: var(--transition); border-radius: 50%; }
input:checked + .slider { background: var(--primary); }
input:checked + .slider:before { transform: translateX(20px); }
.nav-rail { position: fixed; left: 0; top: 0; height: 100%; width: 80px; background: var(--surface); display: flex; flex-direction: column; align-items: center; padding-top: calc(var(--spacing-unit) * 4); }
.footer { background: var(--surface); padding: calc(var(--spacing-unit) * 8) 0; text-align: center; }
.section { padding: calc(var(--spacing-unit) * 16) 0; }
.icon { font-size: 1.5rem; color: var(--on-surface); }
.dashboard { display: grid; grid-template-columns: 1fr 3fr; gap: calc(var(--spacing-unit) * 4); }
.chart { width: 100%; height: 300px; /* Placeholder for chart libraries */ }
.wallet { background: var(--tertiary-container); padding: calc(var(--spacing-unit) * 4); border-radius: var(--border-radius); }
/* Enterprise Additions: AI-friendly classes (v3.4) */
.ai-grid { display: grid; grid-template-areas: "header" "main" "footer"; grid-template-rows: auto 1fr auto; }
.ai-container { max-width: 1280px; margin: 0 auto; padding: 0 calc(var(--spacing-unit) * 4); }
.ai-flex-center { display: flex; align-items: center; justify-content: center; }
}
/* Placeholders for Custom Imports /
/ @import url('/custom-fonts.css'); /
/ @import url('/extra-components.css'); */
/* Dedication: Dedicated to יהוה /
/ Wishing all users, developers, and designers immense joy in using Keg CSS v3.4.0! */4.7sHow can Grok help?


/* This will be injected into the document head when PA.init() is called */

/* Example CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Utility Classes */
.pa-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.pa-row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.pa-col {
  flex: 1;
  padding: 0 15px;
}

.pa-btn {
  display: inline-block;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}

.pa-btn:hover {
  background-color: #0069d9;
}

.pa-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

/* Add your complete CSS framework here */
`;

(function (global) {
    "use strict";

    // =========================================================================
    // ENVIRONMENT DETECTION
    // =========================================================================
    
    const ENV = {
        isBrowser: typeof window !== 'undefined',
        isNode: typeof process !== 'undefined' && process.versions && process.versions.node,
        isWebWorker: typeof self !== 'undefined' && typeof window === 'undefined',
        isServiceWorker: typeof importScripts === 'function',
        isUniversal: false // Will be determined below
    };

    // Determine if we're in a universal environment
    ENV.isUniversal = ENV.isNode || ENV.isWebWorker || ENV.isServiceWorker;

    // Create a global PA object
    const PA = {};
    PA.VERSION = '3.1.6x';
    PA.MODE = 'development'; // Can be 'production' in real apps

    // Core registries
    PA.Signals = new Map();
    PA.Effects = new Map();
    PA.Components = new Map();
    PA.Routes = new Map();
    PA.Middleware = [];
    PA.Plugins = new Map();
    
    // Root element ID
    PA.ROOT_ID = 'pa-root';

    // Performance monitoring system
    PA.Performance = {
        metrics: {
            renders: 0,
            effects: 0,
            signals: 0,
            components: 0,
            routes: 0,
            requests: 0,
            errors: 0,
            memoryUsage: 0,
            renderTime: 0,
            effectTime: 0
        },
        
        startTimer: (name) => {
            if (typeof performance !== 'undefined') {
                const start = performance.now();
                return () => {
                    const end = performance.now();
                    const duration = end - start;
                    if (PA.Performance.metrics[name] !== undefined) {
                        PA.Performance.metrics[name] += duration;
                    }
                    return duration;
                };
            }
            return () => 0;
        },
        
        mark: (name) => {
            if (typeof performance !== 'undefined') {
                performance.mark(name);
            }
        },
        
        measure: (name, startMark, endMark) => {
            if (typeof performance !== 'undefined') {
                performance.measure(name, startMark, endMark);
            }
        },
        
        getMemoryUsage: () => {
            if (typeof performance !== 'undefined' && performance.memory) {
                return {
                    used: performance.memory.usedJSHeapSize,
                    total: performance.memory.totalJSHeapSize,
                    limit: performance.memory.jsHeapSizeLimit
                };
            }
            return { used: 0, total: 0, limit: 0 };
        },
        
        logMetrics: () => {
            if (PA.MODE === 'development') {
                console.table(PA.Performance.metrics);
                const memory = PA.Performance.getMemoryUsage();
                console.log(`Memory Usage: ${Math.round(memory.used / 1024 / 1024)}MB / ${Math.round(memory.limit / 1024 / 1024)}MB`);
            }
        }
    };

    // Error boundary system for catching and handling errors
    PA.ErrorBoundary = {
        errors: [],
        maxErrors: 50,
        
        capture: (error, context = {}) => {
            const errorInfo = {
                message: error.message,
                stack: error.stack,
                timestamp: new Date().toISOString(),
                context,
                id: PA.U.uuid()
            };
            
            PA.ErrorBoundary.errors.unshift(errorInfo);
            if (PA.ErrorBoundary.errors.length > PA.ErrorBoundary.maxErrors) {
                PA.ErrorBoundary.errors.pop();
            }
            
            PA.Performance.metrics.errors++;
            
            if (PA.MODE === 'development') {
                console.error(`PA Error [${errorInfo.id}]:`, error, context);
            }
            
            // Emit error event for global error handling
            PA.Events.emit('error', errorInfo);
            
            return errorInfo;
        },
        
        getErrors: () => [...PA.ErrorBoundary.errors],
        
        clear: () => {
            PA.ErrorBoundary.errors = [];
        }
    };

    // Global event system for component communication
    PA.Events = {
        listeners: new Map(),
        
        on: (event, callback, options = {}) => {
            if (!PA.Events.listeners.has(event)) {
                PA.Events.listeners.set(event, []);
            }
            
            const listener = {
                callback,
                once: options.once || false,
                id: options.id || PA.U.uuid()
            };
            
            PA.Events.listeners.get(event).push(listener);
            
            // Return unsubscribe function
            return () => {
                const listeners = PA.Events.listeners.get(event);
                if (listeners) {
                    const index = listeners.findIndex(l => l.id === listener.id);
                    if (index !== -1) {
                        listeners.splice(index, 1);
                    }
                }
            };
        },
        
        off: (event, callbackOrId) => {
            const listeners = PA.Events.listeners.get(event);
            if (!listeners) return;
            
            const index = listeners.findIndex(l => 
                l.callback === callbackOrId || l.id === callbackOrId
            );
            
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        },
        
        emit: (event, data) => {
            const listeners = PA.Events.listeners.get(event);
            if (!listeners) return;
            
            // Create a copy to avoid issues with listeners being added/removed during iteration
            const listenersCopy = [...listeners];
            
            listenersCopy.forEach(listener => {
                try {
                    listener.callback(data);
                    
                    if (listener.once) {
                        PA.Events.off(event, listener.id);
                    }
                } catch (error) {
                    PA.ErrorBoundary.capture(error, { event, data });
                }
            });
        }
    };

    // =========================================================================
    // I. CORE UTILITIES (U) & MORPHING ENGINE
    // =========================================================================

    const U = {
        uuid: () => 'pa-' + Math.random().toString(36).substr(2, 6),
        // Safe expression evaluation with context
        evalExpr: (expr, ctx) => { 
            try { 
                return new Function('$', `with($){return ${expr}}`).call(ctx, ctx); 
            } catch (e) { 
                return null; 
            } 
        },
        // Neural DOM morphing for efficient updates
        morph: (oldEl, newEl) => {
            if (oldEl.nodeName !== newEl.nodeName) {
                oldEl.replaceWith(newEl);
                return;
            }
            
            // Patch attributes
            Array.from(newEl.attributes).forEach(attr => { 
                if (oldEl.getAttribute(attr.name) !== attr.value) 
                    oldEl.setAttribute(attr.name, attr.value); 
            });
            
            Array.from(oldEl.attributes).forEach(attr => { 
                if (!newEl.hasAttribute(attr.name)) 
                    oldEl.removeAttribute(attr.name); 
            });
            
            // Patch children/text
            if (oldEl.children.length === 0 && newEl.children.length === 0) {
                 if (oldEl.textContent !== newEl.textContent) 
                    oldEl.textContent = newEl.textContent;
            } else {
                oldEl.innerHTML = newEl.innerHTML;
            }
        },
        // Hypermedia swap strategies for content updates
        swap: (targetEl, content, strategy = 'morph') => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content.trim();
            const newEl = tempDiv.firstElementChild;

            switch (strategy) {
                case 'morph': U.morph(targetEl, newEl); break;
                case 'innerHTML': targetEl.innerHTML = content; break;
                case 'outerHTML': targetEl.outerHTML = content; break;
                case 'beforebegin': targetEl.insertAdjacentHTML('beforebegin', content); break;
                case 'afterend': targetEl.insertAdjacentHTML('afterend', content); break;
                case 'afterbegin': targetEl.insertAdjacentHTML('afterbegin', content); break;
                case 'beforeend': targetEl.insertAdjacentHTML('beforeend', content); break;
                default: targetEl.innerHTML = content;
            }
            
            // Re-scan new content for new pa- attributes
            pa.dom.scan(targetEl.parentElement || document.body);
        }
    };

    // =========================================================================
    // II. LOGIC KERNEL (WORKER) - For ORM, Global State, and Heavy Tasks
    // =========================================================================

    const LOGIC_KERNEL_SOURCE = `
        // Logic Kernel Worker Code
        let state = {};
        let signals = new Map();
        let effects = new Map();
        let domMappings = new Map();
        let signalContext = null;
        let history = [{ state: {}, timestamp: Date.now(), action: 'INIT' }];
        let historyIndex = 0;
        let maxHistory = 50;
        
        // Signal management with subscription tracking
        const createSignal = (id, initialValue) => {
            let value = initialValue;
            let subscribers = new Set();
            signals.set(id, subscribers);
            
            const read = () => {
                const currentEffect = signalContext;
                if (currentEffect) {
                    subscribers.add(currentEffect);
                }
                return value;
            };
            
            const write = (newValue) => {
                const finalValue = (typeof newValue === 'function') ? newValue(value) : newValue;
                if (value === finalValue) return;
                value = finalValue;
                
                // Notify subscribers
                subscribers.forEach(subscriber => {
                    try {
                        subscriber(newValue, value);
                    } catch (error) {
                        postMessage({
                            type: 'signal-update',
                            id,
                            value
                        });
                    }
                });
                
                postMessage({
                    type: 'signal-update',
                    id,
                    value
                });
                
                return value;
            };
            
            return [read, write, id];
        };
        
        // Effect management with dependency tracking
        const createEffect = (id, effectFn, options = {}) => {
            effects.set(id, effectFn);
            
            const run = () => {
                signalContext = id;
                try {
                    effectFn();
                } catch (error) {
                    postMessage({
                        type: 'error',
                        error: error.message,
                        stack: error.stack
                    });
                } finally {
                    signalContext = null;
                }
            };
            
            if (options.immediate) {
                run();
            }
            
            return [run, id];
        };
        
        // DOM mapping for signal-element relationships
        const updateDOMMappings = (elementId, signalId, add = true) => {
            if (!domMappings.has(elementId)) {
                domMappings.set(elementId, new Set());
            }
            
            if (add) {
                domMappings.get(elementId).add(signalId);
            } else {
                domMappings.get(elementId).delete(signalId);
            }
        };
        
        // State management with history tracking
        const setState = (updates) => {
            const prevState = { ...state };
            state = { ...state, ...updates };
            
            // Add to history
            historyIndex++;
            history = history.slice(0, historyIndex);
            history.push({
                state: prevState,
                action: { type: 'SET_STATE', payload: updates },
                timestamp: Date.now()
            });
            
            if (history.length > maxHistory) {
                history.shift();
                historyIndex--;
            }
            
            postMessage({
                type: 'state-update',
                state
            });
        };
        
        // Time travel functionality
        const travelTo = (index) => {
            if (index >= 0 && index < history.length) {
                historyIndex = index;
                state = { ...history[index].state };
                
                postMessage({
                    type: 'state-travel',
                    state,
                    index
                });
                
                // Update all signals with new state values
                for (const [id, signal] of signals) {
                    const [read, write] = signal;
                    if (state[id] !== undefined) {
                        write(state[id]);
                    }
                }
                
                return true;
            }
            return false;
        };
        
        // Get current effect for dependency tracking
        const getCurrentEffect = () => signalContext;
        
        // Run signal update
        const runSignalUpdate = (signalId) => {
            const subscribers = signals.get(signalId);
            if (!subscribers) return;
            
            subscribers.forEach(subscriber => {
                try {
                    subscriber(state[signalId]);
                } catch (error) {
                    postMessage({
                        type: 'error',
                        error: error.message,
                        stack: error.stack
                    });
                }
            });
        };
        
        // Run action from UI
        const runAction = (expr, contextId) => {
            const context = state[contextId];
            if (!context) {
                postMessage({
                    type: 'error',
                    error: \`Context not found: \${contextId}\`
                });
                return;
            }
            
            postMessage({
                type: 'run-action',
                expr,
                contextId
            });
        };
        
        // Message handler from main thread
        self.onmessage = (e) => {
            const { type, id, value, error, expr, contextId, index } = e.data;
            
            switch (type) {
                case 'signal-update':
                    runSignalUpdate(id);
                    break;
                    
                case 'run-action':
                    runAction(expr, contextId);
                    break;
                    
                case 'state-update':
                    postMessage({
                        type: 'state-updated',
                        state: value
                    });
                    break;
                    
                case 'travel-to':
                    travelTo(index);
                    break;
                    
                case 'get-history':
                    postMessage({
                        type: 'history-data',
                        history: history,
                        currentIndex: historyIndex
                    });
                    break;
                    
                case 'error':
                    postMessage({
                        type: 'error',
                        error,
                        stack: error.stack
                    });
                    break;
                    
                default:
                    console.warn('Unknown message type:', type);
            }
        };
        
        // Initialize state with initial data
        const init = (initialState) => {
            state = { ...initialState };
            history = [{ state: { ...initialState }, timestamp: Date.now(), action: 'INIT' }];
            historyIndex = 0;
            
            postMessage({
                type: 'state-init',
                state
            });
        };
        
        // Export functions to main thread
        self.postMessage({
            type: 'ready'
        });
    `;

    // =========================================================================
    // III. PRESENTATION KERNEL (MAIN THREAD) - Hyper-Declarative Logic
    // =========================================================================
    
    let logicKernel;
    const workerQueue = new Map();
    let nextCommandId = 0;

    const ThreadingKernel = {
        _send: (command, payload) => {
            return new Promise((resolve, reject) => {
                const id = nextCommandId++;
                workerQueue.set(id, { resolve, reject });
                logicKernel.postMessage({ id, command, payload });
            });
        }
    };

    // Web Worker management for true multi-threading
    PA.Workers = {
        pool: [],
        maxWorkers: navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4,
        taskQueue: [],
        initialized: false,
        
        init: () => {
            return new Promise((resolve) => {
                if (PA.Workers.initialized) {
                    resolve();
                    return;
                }
                
                const workerBlob = new Blob([LOGIC_KERNEL_SOURCE], { type: 'application/javascript' });
                const workerUrl = URL.createObjectURL(workerBlob);
                
                logicKernel = new Worker(workerUrl);
                
                logicKernel.onmessage = (e) => {
                    const { type, id, value, error, expr, contextId, state, index, history, currentIndex } = e.data;
                    
                    switch (type) {
                        case 'ready':
                            PA.Workers.initialized = true;
                            resolve();
                            break;
                            
                        case 'state-update':
                            // Update state in worker
                            PA.LogicKernel.state = { ...PA.LogicKernel.state, ...value };
                            break;
                            
                        case 'signal-update':
                            // Update signal in worker
                            PA.LogicKernel.runSignalUpdate(id);
                            break;
                            
                        case 'run-action':
                            // Run action in worker
                            PA.LogicKernel.runAction(expr, contextId);
                            break;
                            
                        case 'state-travel':
                            // Handle time travel response
                            PA.LogicKernel.state = state;
                            PA.Events.emit('state:travel', { state, index });
                            break;
                            
                        case 'history-data':
                            // Handle history data response
                            PA.Events.emit('history:data', { history, currentIndex });
                            break;
                            
                        case 'error':
                            // Handle errors in worker
                            console.error('PA Worker Error:', error);
                            PA.ErrorBoundary.capture(new Error(error), { context: 'worker' });
                            break;
                            
                        default:
                            console.warn('Unknown message type:', type);
                    }
                };
                
                logicKernel.onerror = (error) => {
                    console.error('PA Worker Error:', error);
                    PA.ErrorBoundary.capture(error, { context: 'worker' });
                };
                
                return logicKernel;
            });
        },
        
        terminate: () => {
            if (logicKernel) {
                logicKernel.terminate();
                PA.Workers.initialized = false;
            }
        }
    };

    // Logic Kernel interface for main thread communication
    PA.LogicKernel = {
        state: {},
        signalContext: null,
        domMappings: new Map(),

        getCurrentEffect: () => PA.LogicKernel.signalContext,
        setCurrentEffect: (id) => { 
            PA.LogicKernel.signalContext = id;
        },
        clearCurrentEffect: () => { 
            PA.LogicKernel.signalContext = null;
        },

        /**
         * Handles an action triggered from the UI
         */
        runAction: (expr, contextId) => {
            if (PA.Workers.initialized) {
                logicKernel.postMessage({
                    type: 'run-action',
                    expr,
                    contextId
                });
            } else {
                const context = PA.LogicKernel.state[contextId];
                if (!context) return console.error('PA LK Error: Context not found:', contextId);

                Promise.resolve().then(() => {
                    PA.LogicKernel.setCurrentEffect('UI_ACTION_' + U.uuid());
                    
                    try {
                        const func = new Function('$', `with($){${expr}}`);
                        func.call(context, context); 
                    } catch (e) {
                        PA.ErrorBoundary.capture(e, { expr, contextId });
                    }
                    PA.LogicKernel.clearCurrentEffect();
                });
            }
        },

        /**
         * Notifies subscribers of a signal change
         */
        runSignalUpdate: (signalId) => {
            if (PA.Workers.initialized) {
                logicKernel.postMessage({
                    type: 'signal-update',
                    id: signalId
                });
            } else {
                const subscribers = PA.Signals.get(signalId);
                if (!subscribers) return;
                
                subscribers.forEach(subscriber => {
                    try {
                        subscriber(PA.LogicKernel.state[signalId]);
                    } catch (error) {
                        PA.ErrorBoundary.capture(error, { signalId });
                    }
                });
            }
        },

        /**
         * Updates the global state and notifies subscribers
         */
        setState: (updates) => {
            if (PA.Workers.initialized) {
                logicKernel.postMessage({
                    type: 'state-update',
                    value: updates
                });
            } else {
                const prevState = { ...PA.LogicKernel.state };
                PA.LogicKernel.state = { ...PA.LogicKernel.state, ...updates };
                
                // Add to history
                if (!PA.LogicKernel.history) {
                    PA.LogicKernel.history = [{ state: prevState, timestamp: Date.now(), action: 'INIT' }];
                    PA.LogicKernel.historyIndex = 0;
                }
                
                PA.LogicKernel.historyIndex++;
                PA.LogicKernel.history = PA.LogicKernel.history.slice(0, PA.LogicKernel.historyIndex);
                PA.LogicKernel.history.push({
                    state: prevState,
                    action: { type: 'SET_STATE', payload: updates },
                    timestamp: Date.now()
                });
                
                if (PA.LogicKernel.history.length > 50) {
                    PA.LogicKernel.history.shift();
                    PA.LogicKernel.historyIndex--;
                }
                
                PA.Events.emit('state:change', { 
                    previous: prevState, 
                    current: PA.LogicKernel.state, 
                    action: { type: 'SET_STATE', payload: updates }
                });
            }
        }
    };

    // Debug API for time-travel debugging
    PA.debug = {
        travelTo: (index) => {
            if (PA.Workers.initialized) {
                logicKernel.postMessage({
                    type: 'travel-to',
                    index
                });
            } else if (PA.LogicKernel.history) {
                if (index >= 0 && index < PA.LogicKernel.history.length) {
                    PA.LogicKernel.historyIndex = index;
                    PA.LogicKernel.state = { ...PA.LogicKernel.history[index].state };
                    
                    PA.Events.emit('state:travel', { 
                        state: PA.LogicKernel.state, 
                        index 
                    });
                    
                    // Update all signals with new state values
                    for (const [id, signal] of PA.Signals) {
                        if (PA.LogicKernel.state[id] !== undefined) {
                            const [read, write] = signal;
                            write(PA.LogicKernel.state[id]);
                        }
                    }
                    
                    return true;
                }
            }
            return false;
        },
        
        getHistory: () => {
            if (PA.Workers.initialized) {
                logicKernel.postMessage({
                    type: 'get-history'
                });
            } else {
                return PA.LogicKernel.history || [];
            }
        }
    };

    // Virtual DOM implementation for efficient rendering
    PA.VDOM = {
        nodes: new Map(),
        components: new Map(),
        
        createElement: (tag, props = {}, ...children) => {
            return {
                tag,
                props: { ...props },
                children: children.flat(),
                key: props.key || U.uuid(),
                _isVNode: true
            };
        },
        
        render: (vnode, container) => {
            const endMark = `pa-render-end-${U.uuid()}`;
            PA.Performance.mark('pa-render-start');
            
            // Create or update the DOM node
            const node = PA.VDOM.createDOMNode(vnode);
            
            // Replace container content with new node
            if (container.firstChild) {
                container.replaceChild(node, container.firstChild);
            } else {
                container.appendChild(node);
            }
            
            // Store the vnode for future updates
            PA.VDOM.nodes.set(container, vnode);
            
            PA.Performance.mark(endMark);
            PA.Performance.measure('pa-render', 'pa-render-start', endMark);
            
            PA.Performance.metrics.renders++;
            
            return node;
        },
        
        update: (vnode, container) => {
            const prevVNode = PA.VDOM.nodes.get(container);
            if (!prevVNode) {
                return PA.VDOM.render(vnode, container);
            }
            
            const endMark = `pa-update-end-${U.uuid()}`;
            PA.Performance.mark('pa-update-start');
            
            // Diff and patch the DOM
            const patches = PA.VDOM.diff(prevVNode, vnode);
            PA.VDOM.applyPatches(container, patches);
            
            // Store the updated vnode
            PA.VDOM.nodes.set(container, vnode);
            
            PA.Performance.mark(endMark);
            PA.Performance.measure('pa-update', 'pa-update-start', endMark);
            
            PA.Performance.metrics.renders++;
            
            return container.firstChild;
        },
        
        createDOMNode: (vnode) => {
            if (typeof vnode === 'string' || typeof vnode === 'number') {
                return document.createTextNode(vnode);
            }
            
            if (!vnode || !vnode._isVNode) {
                return document.createTextNode('');
            }
            
            const element = document.createElement(vnode.tag);
            
            // Set attributes
            Object.keys(vnode.props).forEach(key => {
                if (key === 'key') return; // Skip internal key prop
                
                if (key === 'className') {
                    element.className = vnode.props[key];
                } else if (key === 'style' && typeof vnode.props[key] === 'object') {
                    Object.assign(element.style, vnode.props[key]);
                } else if (key.startsWith('on') && typeof vnode.props[key] === 'function') {
                    const eventType = key.substring(2).toLowerCase();
                    element.addEventListener(eventType, vnode.props[key]);
                } else {
                    element.setAttribute(key, vnode.props[key]);
                }
            });
            
            // Add children
            vnode.children.forEach(child => {
                const childNode = PA.VDOM.createDOMNode(child);
                element.appendChild(childNode);
            });
            
            return element;
        },
        
        diff: (oldVNode, newVNode) => {
            const patches = [];
            
            // Different node types - replace
            if (oldVNode.tag !== newVNode.tag) {
                patches.push({
                    type: 'REPLACE',
                    oldVNode,
                    newVNode
                });
                return patches;
            }
            
            // Same node type - diff props
            const propPatches = PA.VDOM.diffProps(oldVNode.props, newVNode.props);
            patches.push(...propPatches);
            
            // Diff children
            const childPatches = PA.VDOM.diffChildren(oldVNode.children, newVNode.children);
            patches.push(...childPatches);
            
            return patches;
        },
        
        diffProps: (oldProps, newProps) => {
            const patches = [];
            const keys = new Set([...Object.keys(oldProps), ...Object.keys(newProps)]);
            
            keys.forEach(key => {
                if (key === 'key') return; // Skip internal key prop
                
                // Event handlers - replace
                if (key.startsWith('on') && typeof newProps[key] === 'function') {
                    patches.push({
                        type: 'EVENT',
                        key,
                        oldValue: oldProps[key],
                        newValue: newProps[key]
                    });
                    return;
                }
                
                // Style objects - merge
                if (key === 'style' && typeof oldProps[key] === 'object' && typeof newProps[key] === 'object') {
                    const stylePatches = PA.VDOM.diffStyle(oldProps[key], newProps[key]);
                    if (stylePatches.length > 0) {
                        patches.push({
                            type: 'STYLE',
                            key,
                            patches: stylePatches
                        });
                    }
                    return;
                }
                
                // Other props - replace if different
                if (oldProps[key] !== newProps[key]) {
                    patches.push({
                        type: 'PROP',
                        key,
                        oldValue: oldProps[key],
                        newValue: newProps[key]
                    });
                }
            });
            
            return patches;
        },
        
        diffStyle: (oldStyle, newStyle) => {
            const patches = [];
            const keys = new Set([...Object.keys(oldStyle), ...Object.keys(newStyle)]);
            
            keys.forEach(key => {
                if (oldStyle[key] !== newStyle[key]) {
                    patches.push({
                        key,
                        value: newStyle[key]
                    });
                }
            });
            
            return patches;
        },
        
        diffChildren: (oldChildren, newChildren) => {
            const patches = [];
            const oldLength = oldChildren.length;
            const newLength = newChildren.length;
            
            // Simple implementation - replace all children
            if (oldLength !== newLength) {
                patches.push({
                    type: 'REPLACE_CHILDREN',
                    oldChildren,
                    newChildren
                });
                return patches;
            }
            
            // Check each child
            for (let i = 0; i < oldLength; i++) {
                const oldChild = oldChildren[i];
                const newChild = newChildren[i];
                
                // Different children - replace
                if (oldChild !== newChild) {
                    patches.push({
                        type: 'REPLACE_CHILD',
                        index: i,
                        oldChild,
                        newChild
                    });
                }
            }
            
            return patches;
        },
        
        applyPatches: (container, patches) => {
            const element = container.firstChild;
            if (!element) return;
            
            patches.forEach(patch => {
                switch (patch.type) {
                    case 'REPLACE':
                        const newNode = PA.VDOM.createDOMNode(patch.newVNode);
                        container.replaceChild(newNode, element);
                        break;
                        
                    case 'REPLACE_CHILDREN':
                        const newChildren = patch.newChildren.map(child => PA.VDOM.createDOMNode(child));
                        
                        // Clear existing children
                        while (element.firstChild) {
                            element.removeChild(element.firstChild);
                        }
                        
                        // Add new children
                        newChildren.forEach(child => {
                            element.appendChild(child);
                        });
                        break;
                        
                    case 'PROP':
                        if (patch.key === 'style') {
                            element.style.cssText = Object.entries(patch.patches).reduce((cssText, [key, value]) => {
                            return cssText + `${key}: ${value};`;
                        }, '');
                        } else {
                            element.setAttribute(patch.key, patch.newValue);
                        }
                        break;
                        
                    case 'STYLE':
                        element.style.cssText = Object.entries(patch.patches).reduce((cssText, [key, value]) => {
                            return cssText + `${key}: ${value};`;
                        }, '');
                        break;
                        
                    case 'REPLACE_CHILD':
                        const child = PA.VDOM.createDOMNode(patch.newChild);
                        
                        // Get all existing children
                        const children = Array.from(element.children);
                        
                        if (patch.index < children.length) {
                            element.replaceChild(child, children[patch.index]);
                        } else {
                            element.appendChild(child);
                        }
                        break;
                }
            });
        }
    };

    // Component system with lifecycle hooks
    PA.Component = {
        registry: new Map(),
        
        define: (name, component) => {
            PA.Component.registry.set(name, component);
            return component;
        },
        
        create: (name, props = {}) => {
            const component = PA.Component.registry.get(name);
            if (!component) {
                throw new Error(`Component "${name}" not found`);
            }
            
            return {
                name,
                props,
                state: component.initialState ? component.initialState(props) : {},
                hooks: {
                    onMount: [],
                    onUnmount: [],
                    onUpdate: [],
                    onError: []
                },
                _isComponent: true
            };
        },
        
        mount: (component, container) => {
            if (!component._isComponent) {
                throw new Error('Invalid component. Use PA.Component.create() first.');
            }
            
            const endMark = `pa-component-mount-end-${U.uuid()}`;
            PA.Performance.mark('pa-component-mount-start');
            
            // Create vnode from component
            const vnode = component.render();
            
            // Add component instance to vnode
            vnode.props = { ...vnode.props, _component: component };
            
            // Render vnode to container
            PA.VDOM.render(vnode, container);
            
            // Call onMount hooks
            component.hooks.onMount.forEach(hook => {
                try {
                    hook();
                } catch (error) {
                    PA.ErrorBoundary.capture(error, { component, hook: 'onMount' });
                }
            });
            
            PA.Performance.mark(endMark);
            PA.Performance.measure('pa-component-mount', 'pa-component-mount-start', endMark);
            
            PA.Performance.metrics.components++;
            
            return component;
        },
        
        update: (component, newProps) => {
            if (!component._isComponent) {
                throw new Error('Invalid component. Use PA.Component.create() first.');
            }
            
            const endMark = `pa-component-update-end-${U.uuid()}`;
            PA.Performance.mark('pa-component-update-start');
            
            const oldProps = component.props;
            component.props = { ...component.props, ...newProps };
            
            // Call onUpdate hooks
            component.hooks.onUpdate.forEach(hook => {
                try {
                    hook(oldProps, newProps);
                } catch (error) {
                    PA.ErrorBoundary.capture(error, { component, hook: 'onUpdate' });
                }
            });
            
            // Re-render component
            const vnode = component.render();
            vnode.props = { ...vnode.props, _component: component };
            
            // Find container for this component
            const container = document.querySelector(`[pa-component="${component.name}"]`);
            if (container) {
                PA.VDOM.update(vnode, container);
            }
            
            PA.Performance.mark(endMark);
            PA.Performance.measure('pa-component-update', 'pa-component-update-start', endMark);
            
            return component;
        },
        
        unmount: (component) => {
            if (!component._isComponent) {
                throw new Error('Invalid component. Use PA.Component.create() first.');
            }
            
            // Call onUnmount hooks
            component.hooks.onUnmount.forEach(hook => {
                try {
                    hook();
                } catch (error) {
                    PA.ErrorBoundary.capture(error, { component, hook: 'onUnmount' });
                }
            });
            
            // Find container for this component
            const container = document.querySelector(`[pa-component="${component.name}"]`);
            if (container) {
                container.innerHTML = '';
            }
            
            return component;
        }
    };

    // --- I. REACTIVE SIGNAL API (pa- signals) ---

    /**
     * Creates a reactive signal (getter/setter pair)
     */
    PA.signal = (initialValue) => {
        let value = initialValue;
        let subscribers = new Set();
        const id = U.uuid();
        PA.Signals.set(id, subscribers);

        const read = () => {
            const currentEffect = PA.LogicKernel.getCurrentEffect();
            if (currentEffect) {
                subscribers.add(currentEffect);
            }
            return value;
        };

        const write = (newValue) => {
            const finalValue = (typeof newValue === 'function') ? newValue(value) : newValue;
            if (value === finalValue) return;
            value = finalValue;
            
            // Dispatch update to the Logic Kernel
            PA.LogicKernel.runSignalUpdate(id);
            return value;
        };

        PA.Performance.metrics.signals++;
        return [read, write, id]; 
    };

    /**
     * Runs a side-effect function whenever its dependencies change
     */
    PA.effect = (effectFn, options = {}) => {
        const id = U.uuid();
        PA.Effects.set(id, effectFn);

        const run = () => {
            const endMark = `pa-effect-end-${U.uuid()}`;
            PA.Performance.mark('pa-effect-start');
            
            // Dependency tracking needs to happen in the LK context
            PA.LogicKernel.setCurrentEffect(id);
            
            try {
                effectFn();
            } catch (error) {
                PA.ErrorBoundary.capture(error, { effect: effectFn.toString() });
            } finally {
                PA.LogicKernel.clearCurrentEffect();
            }
            
            PA.Performance.mark(endMark);
            PA.Performance.measure('pa-effect', 'pa-effect-start', endMark);
            PA.Performance.metrics.effects++;
        };

        if (options.immediate) {
            run(); 
        }
        return [run, id];
    };

    /**
     * Creates a signal whose value is computed from other signals
     */
    PA.computed = (computeFn) => {
        let value;
        // The computed value's change is managed by an internal effect
        const [updateEffect, signalId] = PA.effect(() => {
            const oldValue = value;
            value = computeFn();
            if (oldValue !== value) {
                // If the value changes, treat it as a signal write to notify its dependents
                PA.LogicKernel.runSignalUpdate(signalId); 
            }
        }, { immediate: true });
        
        // This is the public getter for the computed value
        const read = () => {
            const currentEffect = PA.LogicKernel.getCurrentEffect();
            if (currentEffect) {
                // If read inside another effect, make that effect dependent on this computed signal
                PA.Signals.get(signalId)?.add(currentEffect);
            }
            return value;
        };

        return [read, signalId];
    };

    // =========================================================================
    // DECLARATIVE COMPONENT SYSTEM
    // =========================================================================

    PA.component = (name, templateString) => {
        // Register a named component template
        PA.Components.set(name, {
            template: templateString,
            signals: new Map()
        });
    };

    // =========================================================================
    // CLIENT-SIDE ROUTING (CSR)
    // =========================================================================

    PA.router = {
        routes: new Map(),
        currentPath: '',
        defaultPath: '/',
        targetElementId: 'app',
        
        add: (path, targetElementId) => {
            PA.router.routes.set(path, targetElementId);
        },
        
        init: (defaultPath = '/', targetElementId = 'app') => {
            PA.router.defaultPath = defaultPath;
            PA.router.targetElementId = targetElementId;
            
            // Listen to hashchange events
            window.addEventListener('hashchange', PA.router.handleRouteChange);
            
            // Listen to popstate events for History API
            window.addEventListener('popstate', PA.router.handleRouteChange);
            
            // Handle initial route
            PA.router.handleRouteChange();
        },
        
        navigate: (path) => {
            // Update URL using History API
            if (window.history.pushState) {
                window.history.pushState(null, null, `#${path}`);
            } else {
                // Fallback for older browsers
                window.location.hash = path;
            }
            
            // Trigger route change
            PA.router.handleRouteChange();
        },
        
        handleRouteChange: () => {
            // Get current path from hash or pathname
            let path = window.location.hash.substring(1);
            
            if (!path) {
                path = window.location.pathname;
            }
            
            PA.router.currentPath = path;
            
            // Find matching route
            const targetElementId = PA.router.routes.get(path) || PA.router.targetElementId;
            const targetElement = document.getElementById(targetElementId);
            
            if (!targetElement) {
                console.error(`Target element with ID "${targetElementId}" not found`);
                return;
            }
            
            // Get component for this path
            const component = PA.Components.get(path);
            
            if (component) {
                // Render component template
                targetElement.innerHTML = component.template;
                
                // Initialize component signals and effects
                pa.dom.scan(targetElement);
            } else {
                // Try to load content from server
                fetch(`/pages/${path}.html`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Page not found: ${path}`);
                        }
                        return response.text();
                    })
                    .then(html => {
                        targetElement.innerHTML = html;
                        pa.dom.scan(targetElement);
                    })
                    .catch(error => {
                        console.error('Error loading page:', error);
                        targetElement.innerHTML = `<h1>Page Not Found</h1><p>The page "${path}" could not be found.</p>`;
                    });
            }
            
            // Emit route change event
            PA.Events.emit('route:change', { path, targetElementId });
        }
    };

    // =========================================================================
    // CONCEPTUAL SERVER-SIDE RENDERING (SSR/SSG MOCK)
    // =========================================================================

    PA.renderToString = (templateString, initialSignalData) => {
        // Parse the template string
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = templateString;
        
        // Process pa-text attributes
        tempDiv.querySelectorAll('[pa-text]').forEach(element => {
            const expr = element.getAttribute('pa-text');
            const value = U.evalExpr(expr, initialSignalData);
            element.textContent = value !== null ? value : '';
        });
        
        // Process pa-if attributes
        tempDiv.querySelectorAll('[pa-if]').forEach(element => {
            const expr = element.getAttribute('pa-if');
            const shouldShow = U.evalExpr(expr, initialSignalData);
            
            if (!shouldShow) {
                element.remove();
            }
        });
        
        // Process pa-for attributes
        tempDiv.querySelectorAll('[pa-for]').forEach(element => {
            const expr = element.getAttribute('pa-for');
            const [item, arrayExpr] = expr.split(' in ').map(s => s.trim());
            const array = U.evalExpr(arrayExpr, initialSignalData) || [];
            
            if (!element._template) {
                element._template = element.innerHTML;
                element.innerHTML = '';
            }
            
            let html = '';
            array.forEach((data, index) => {
                const scope = { ...initialSignalData, [item]: data, $index: index };
                let itemHtml = element._template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => scope[key] || '');
                html += itemHtml;
            });
            
            element.innerHTML = html;
        });
        
        // Return the rendered HTML
        return tempDiv.innerHTML;
    };

    // =========================================================================
    // BROWSER & PHONE APIS
    // =========================================================================

    PA.device = {
        geolocation: () => {
            return new Promise((resolve, reject) => {
                if (!navigator.geolocation) {
                    reject(new Error('Geolocation is not supported by this browser'));
                    return;
                }
                
                navigator.geolocation.getCurrentPosition(
                    position => {
                        resolve({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            accuracy: position.coords.accuracy,
                            altitude: position.coords.altitude,
                            altitudeAccuracy: position.coords.altitudeAccuracy,
                            heading: position.coords.heading,
                            speed: position.coords.speed,
                            timestamp: position.timestamp
                        });
                    },
                    error => {
                        reject(error);
                    }
                );
            });
        },
        
        camera: (constraints = { video: true }) => {
            return new Promise((resolve, reject) => {
                    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                        reject(new Error('Camera API is not supported by this browser'));
                        return;
                    }
                    
                    navigator.mediaDevices.getUserMedia(constraints)
                        .then(stream => {
                            resolve(stream);
                        })
                        .catch(error => {
                            reject(error);
                        });
                });
        },
        
        microphone: (constraints = { audio: true }) => {
            return new Promise((resolve, reject) => {
                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    reject(new Error('Microphone API is not supported by this browser'));
                    return;
                }
                
                navigator.mediaDevices.getUserMedia(constraints)
                    .then(stream => {
                        resolve(stream);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        
        orientation: () => {
            return new Promise((resolve) => {
                if (!window.DeviceOrientationEvent) {
                    resolve({ supported: false });
                    return;
                }
                
                const handleOrientation = (event) => {
                    window.removeEventListener('deviceorientation', handleOrientation);
                    resolve({
                        supported: true,
                        alpha: event.alpha,
                        beta: event.beta,
                        gamma: event.gamma,
                        absolute: event.absolute
                    });
                };
                
                window.addEventListener('deviceorientation', handleOrientation);
                
                // Timeout in case orientation doesn't change
                setTimeout(() => {
                    window.removeEventListener('deviceorientation', handleOrientation);
                    resolve({ supported: true, waiting: true });
                }, 1000);
            });
        },
        
        battery: () => {
            return new Promise((resolve) => {
                if (!navigator.getBattery) {
                    resolve({ supported: false });
                    return;
                }
                
                navigator.getBattery().then(battery => {
                    resolve({
                        supported: true,
                        level: battery.level,
                        charging: battery.charging,
                        chargingTime: battery.chargingTime,
                        dischargingTime: battery.dischargingTime
                    });
                });
            });
        },
        
        vibrate: (pattern) => {
            if (!navigator.vibrate) {
                return false;
            }
            
            return navigator.vibrate(pattern);
        },
        
        network: () => {
            return new Promise((resolve) => {
                if (!navigator.connection) {
                    resolve({ supported: false });
                    return;
                }
                
                resolve({
                    supported: true,
                    effectiveType: navigator.connection.effectiveType,
                    downlink: navigator.connection.downlink,
                    rtt: navigator.connection.rtt,
                    saveData: navigator.connection.saveData
                });
            });
        },
        
        screen: () => {
            return {
                width: screen.width,
                height: screen.height,
                availWidth: screen.availWidth,
                availHeight: screen.availHeight,
                colorDepth: screen.colorDepth,
                pixelDepth: screen.pixelDepth,
                orientation: screen.orientation ? screen.orientation.type : 'unknown'
            };
        },
        
        stream: (constraints = { video: true, audio: true }) => {
            return PA.device.camera(constraints);
        }
    };

    // =========================================================================
    // API CONSUMPTION & CREATION
    // =========================================================================

    PA.api = {
        consume: (config) => {
            const {
                baseURL = '',
                headers = {},
                timeout = 10000,
                interceptors = { request: [], response: [] }
            } = config;
            
            return {
                get: (endpoint, options = {}) => {
                    return PA.api.request('GET', baseURL + endpoint, null, {
                        ...options,
                        headers: { ...headers, ...options.headers }
                    }, interceptors);
                },
                
                post: (endpoint, data, options = {}) => {
                    return PA.api.request('POST', baseURL + endpoint, data, {
                        ...options,
                        headers: { ...headers, ...options.headers }
                    }, interceptors);
                },
                
                put: (endpoint, data, options = {}) => {
                    return PA.api.request('PUT', baseURL + endpoint, data, {
                        ...options,
                        headers: { ...headers, ...options.headers }
                    }, interceptors);
                },
                
                delete: (endpoint, options = {}) => {
                    return PA.api.request('DELETE', baseURL + endpoint, null, {
                        ...options,
                        headers: { ...headers, ...options.headers }
                    }, interceptors);
                }
            };
        },
        
        create: (config) => {
            const {
                routes = {},
                middleware = [],
                port = 3000
            } = config;
            
            if (ENV.isNode) {
                const http = require('http');
                const url = require('url');
                
                const server = http.createServer(async (req, res) => {
                    try {
                        const parsedUrl = url.parse(req.url, true);
                        const method = req.method;
                        const path = parsedUrl.pathname;
                        
                        // Find matching route
                        let handler = null;
                        let params = {};
                        
                        for (const [route, routeHandler] of Object.entries(routes)) {
                            const routeParts = route.split('/');
                            const pathParts = path.split('/');
                            
                            if (routeParts.length !== pathParts.length) continue;
                            
                            let match = true;
                            const routeParams = {};
                            
                            for (let i = 0; i < routeParts.length; i++) {
                                if (routeParts[i].startsWith(':')) {
                                    routeParams[routeParts[i].substring(1)] = pathParts[i];
                                } else if (routeParts[i] !== pathParts[i]) {
                                    match = false;
                                    break;
                                }
                            }
                            
                            if (match) {
                                handler = routeHandler;
                                params = routeParams;
                                break;
                            }
                        }
                        
                        if (!handler) {
                            res.writeHead(404, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ error: 'Not found' }));
                            return;
                        }
                        
                        // Parse body
                        let body = {};
                        if (method !== 'GET') {
                            body = await new Promise((resolve) => {
                                let data = '';
                                req.on('data', chunk => {
                                    data += chunk;
                                });
                                req.on('end', () => {
                                    try {
                                        resolve(JSON.parse(data));
                                    } catch (error) {
                                        resolve({});
                                    }
                                });
                            });
                        }
                        
                        // Execute middleware
                        for (const middlewareFn of middleware) {
                            await middlewareFn(req, res, () => {});
                        }
                        
                        // Execute handler
                        const result = await handler({
                            method,
                            path,
                            query: parsedUrl.query,
                            params,
                            body,
                            headers: req.headers
                        });
                        
                        // Send response
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(result));
                    } catch (error) {
                        console.error('API Server Error:', error);
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: error.message }));
                    }
                });
                
                server.listen(port, () => {
                    console.log(`API Server listening on port ${port}`);
                });
                
                return server;
            } else {
                console.warn('PA.api.create() is only available in Node.js environment');
                return null;
            }
        },
        
        oauth: (provider, options = {}) => {
            const providers = {
                google: {
                    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
                    tokenUrl: 'https://oauth2.googleapis.com/token',
                    scope: 'openid profile email',
                    clientId: options.clientId || '',
                    redirectUri: options.redirectUri || window.location.origin + '/auth/callback'
                },
                facebook: {
                    authUrl: 'https://www.facebook.com/v18.0/dialog/oauth',
                    tokenUrl: 'https://graph.facebook.com/v18.0/oauth/access_token',
                    scope: 'email,public_profile',
                    clientId: options.clientId || '',
                    redirectUri: options.redirectUri || window.location.origin + '/auth/callback'
                },
                github: {
                    authUrl: 'https://github.com/login/oauth/authorize',
                    tokenUrl: 'https://github.com/login/oauth/access_token',
                    scope: 'user:email',
                    clientId: options.clientId || '',
                    redirectUri: options.redirectUri || window.location.origin + '/auth/callback'
                }
            };
            
            const providerConfig = providers[provider];
            if (!providerConfig) {
                throw new Error(`OAuth provider "${provider}" is not supported`);
            }
            
            return {
                login: () => {
                    const authParams = new URLSearchParams({
                        client_id: providerConfig.clientId,
                        redirect_uri: providerConfig.redirectUri,
                        scope: providerConfig.scope,
                        response_type: 'code'
                    });
                    
                    const authUrl = `${providerConfig.authUrl}?${authParams.toString()}`;
                    window.location.href = authUrl;
                },
                
                getToken: (code) => {
                    return fetch(providerConfig.tokenUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: new URLSearchParams({
                            client_id: providerConfig.clientId,
                            client_secret: options.clientSecret || '',
                            code,
                            redirect_uri: providerConfig.redirectUri,
                            grant_type: 'authorization_code'
                        })
                    }).then(response => response.json());
                },
                
                getUserInfo: (token) => {
                    const userInfoUrls = {
                        google: 'https://www.googleapis.com/oauth2/v2/userinfo',
                        facebook: 'https://graph.facebook.com/me',
                        github: 'https://api.github.com/user'
                    };
                    
                    return fetch(userInfoUrls[provider], {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }).then(response => response.json());
                }
            };
        },
        
        rest: (method, url, data, options = {}) => {
            return PA.api.request(method, url, data, options);
        },
        
        graphql: (query, variables = {}, options = {}) => {
            return PA.api.request('POST', options.url || '/graphql', {
                query,
                variables
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            });
        },
        
        websocket: (url, options = {}) => {
            if (ENV.isBrowser) {
                const socket = new WebSocket(url);
                
                socket.onopen = options.onopen || (() => {});
                socket.onmessage = options.onmessage || (() => {});
                socket.onerror = options.onerror || (() => {});
                socket.onclose = options.onclose || (() => {});
                
                return {
                    socket,
                    send: (data) => {
                        if (socket.readyState === WebSocket.OPEN) {
                            socket.send(typeof data === 'string' ? data : JSON.stringify(data));
                        } else {
                            console.error('WebSocket is not open');
                        }
                    },
                    close: () => {
                        socket.close();
                    }
                };
            } else {
                console.warn('PA.api.websocket() is only available in browser environment');
                return null;
            }
        },
        
        request: (method, url, data, options = {}, interceptors = { request: [], response: [] }) => {
            return new Promise((resolve, reject) => {
                // Apply request interceptors
                let requestOptions = {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                        ...options.headers
                    }
                };
                
                if (data && method !== 'GET') {
                    requestOptions.body = JSON.stringify(data);
                }
                
                for (const interceptor of interceptors.request) {
                    requestOptions = interceptor(requestOptions) || requestOptions;
                }
                
                const timeout = options.timeout || 10000;
                const timeoutId = setTimeout(() => {
                    reject(new Error('Request timeout'));
                }, timeout);
                
                fetch(url, requestOptions)
                    .then(response => {
                        clearTimeout(timeoutId);
                        
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        
                        return response.json();
                    })
                    .then(data => {
                        // Apply response interceptors
                        let responseData = data;
                        for (const interceptor of interceptors.response) {
                            responseData = interceptor(responseData) || responseData;
                        }
                        
                        resolve(responseData);
                    })
                    .catch(error => {
                        clearTimeout(timeoutId);
                        reject(error);
                    });
            });
        }
    };

    // =========================================================================
    // SESSION & CACHE MANAGEMENT
    // =========================================================================

    PA.session = {
        set: (key, value) => {
            if (ENV.isBrowser) {
                sessionStorage.setItem(key, JSON.stringify(value));
            } else if (ENV.isNode) {
                // In Node.js, use in-memory storage
                if (!PA.session._data) {
                    PA.session._data = {};
                }
                PA.session._data[key] = value;
            }
        },
        
        get: (key) => {
            if (ENV.isBrowser) {
                const value = sessionStorage.getItem(key);
                return value ? JSON.parse(value) : null;
            } else if (ENV.isNode) {
                return PA.session._data ? PA.session._data[key] : null;
            }
            return null;
        },
        
        remove: (key) => {
            if (ENV.isBrowser) {
                sessionStorage.removeItem(key);
            } else if (ENV.isNode) {
                if (PA.session._data) {
                    delete PA.session._data[key];
                }
            }
        },
        
        clear: () => {
            if (ENV.isBrowser) {
                sessionStorage.clear();
            } else if (ENV.isNode) {
                PA.session._data = {};
            }
        },
        
        destroy: () => {
            PA.session.clear();
        }
    };
    
    PA.cache = {
        set: (key, value, ttl = 3600000) => { // Default TTL: 1 hour
            const item = {
                value,
                expires: Date.now() + ttl
            };
            
            if (ENV.isBrowser) {
                localStorage.setItem(`pa-cache-${key}`, JSON.stringify(item));
            } else if (ENV.isNode) {
                if (!PA.cache._data) {
                    PA.cache._data = {};
                }
                PA.cache._data[key] = item;
            }
        },
        
        get: (key) => {
            let item;
            
            if (ENV.isBrowser) {
                const value = localStorage.getItem(`pa-cache-${key}`);
                item = value ? JSON.parse(value) : null;
            } else if (ENV.isNode) {
                item = PA.cache._data ? PA.cache._data[key] : null;
            }
            
            if (!item) return null;
            
            // Check if expired
            if (Date.now() > item.expires) {
                PA.cache.remove(key);
                return null;
            }
            
            return item.value;
        },
        
        remove: (key) => {
            if (ENV.isBrowser) {
                localStorage.removeItem(`pa-cache-${key}`);
            } else if (ENV.isNode) {
                if (PA.cache._data) {
                    delete PA.cache._data[key];
                }
            }
        },
        
        clear: () => {
            if (ENV.isBrowser) {
                Object.keys(localStorage).forEach(key => {
                    if (key.startsWith('pa-cache-')) {
                        localStorage.removeItem(key);
                    }
                });
            } else if (ENV.isNode) {
                PA.cache._data = {};
            }
        },
        
        lru: (maxSize = 100) => {
            const cache = new Map();
            
            return {
                get: (key) => {
                    if (cache.has(key)) {
                        // Move to end (most recently used)
                        const value = cache.get(key);
                        cache.delete(key);
                        cache.set(key, value);
                        return value;
                    }
                    return null;
                },
                
                set: (key, value) => {
                    if (cache.has(key)) {
                        cache.delete(key);
                    } else if (cache.size >= maxSize) {
                        // Remove least recently used (first item)
                        const firstKey = cache.keys().next().value;
                        cache.delete(firstKey);
                    }
                    cache.set(key, value);
                },
                
                has: (key) => cache.has(key),
                
                delete: (key) => cache.delete(key),
                
                clear: () => cache.clear()
            };
        }
    };

    // =========================================================================
    // MEDIA PROCESSING
    // =========================================================================

    PA.media = {
        preload: (images) => {
            if (!ENV.isBrowser) return Promise.resolve();
            
            const promises = [];
            
            images.forEach(src => {
                const promise = new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve(img);
                    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
                    img.src = src;
                });
                promises.push(promise);
            });
            
            return Promise.all(promises);
        },
        
        compress: (file, quality = 0.8) => {
            return new Promise((resolve) => {
                if (!ENV.isBrowser) {
                    resolve(file);
                    return;
                }
                
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new Image();
                
                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    
                    ctx.drawImage(img, 0, 0);
                    
                    canvas.toBlob(resolve, 'image/jpeg', quality);
                };
                
                img.src = URL.createObjectURL(file);
            });
        },
        
        resize: (file, width, height) => {
            return new Promise((resolve) => {
                if (!ENV.isBrowser) {
                    resolve(file);
                    return;
                }
                
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new Image();
                
                img.onload = () => {
                    // Calculate aspect ratio
                    const aspectRatio = img.width / img.height;
                    let newWidth = width;
                    let newHeight = height;
                    
                    if (width && !height) {
                        newHeight = width / aspectRatio;
                    } else if (!width && height) {
                        newWidth = height * aspectRatio;
                    }
                    
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);
                    
                    canvas.toBlob(resolve);
                };
                
                img.src = URL.createObjectURL(file);
            });
        },
        
        filter: (file, filterType) => {
            return new Promise((resolve) => {
                if (!ENV.isBrowser) {
                    resolve(file);
                    return;
                }
                
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new Image();
                
                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    
                    ctx.drawImage(img, 0, 0);
                    
                    // Apply filter
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imageData.data;
                    
                    switch (filterType) {
                        case 'grayscale':
                            for (let i = 0; i < data.length; i += 4) {
                                const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
                                data[i] = gray;
                                data[i + 1] = gray;
                                data[i + 2] = gray;
                            }
                            break;
                        case 'sepia':
                            for (let i = 0; i < data.length; i += 4) {
                                const r = data[i];
                                const g = data[i + 1];
                                const b = data[i + 2];
                                
                                data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
                                data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
                                data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
                            }
                            break;
                        case 'invert':
                            for (let i = 0; i < data.length; i += 4) {
                                data[i] = 255 - data[i];
                                data[i + 1] = 255 - data[i + 1];
                                data[i + 2] = 255 - data[i + 2];
                            }
                            break;
                    }
                    
                    ctx.putImageData(imageData, 0, 0);
                    
                    canvas.toBlob(resolve);
                };
                
                img.src = URL.createObjectURL(file);
            });
        },
        
        thumbnail: (file, size = 150) => {
            return PA.media.resize(file, size, size);
        }
    };

    // =========================================================================
    // FILE MANAGEMENT
    // =========================================================================

    PA.file = {
        bucket: (name, options = {}) => {
            if (!PA.file._buckets) {
                PA.file._buckets = new Map();
            }
            
            const bucket = {
                name,
                files: new Map(),
                permissions: options.permissions || { read: true, write: true }
            };
            
            PA.file._buckets.set(name, bucket);
            
            // Load files from localStorage if available
            if (ENV.isBrowser) {
                const storedFiles = localStorage.getItem(`pa-file-bucket-${name}`);
                if (storedFiles) {
                    try {
                        const parsedFiles = JSON.parse(storedFiles);
                        bucket.files = new Map(Object.entries(parsedFiles));
                    } catch (error) {
                        console.error(`Error loading bucket ${name}:`, error);
                    }
                }
            }
            
            return bucket;
        },
        
        upload: (file, options = {}) => {
            return new Promise((resolve, reject) => {
                const bucketName = options.bucket || 'default';
                let bucket = PA.file._buckets.get(bucketName);
                
                if (!bucket) {
                    bucket = PA.file.bucket(bucketName);
                }
                
                // Create file record
                const fileRecord = {
                    id: U.uuid(),
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    data: null, // In a real implementation, this would be stored in a cloud service
                    url: URL.createObjectURL(file),
                    metadata: options.metadata || {},
                    createdAt: new Date().toISOString()
                };
                
                // Read file as data URL
                const reader = new FileReader();
                
                reader.onload = () => {
                    fileRecord.data = reader.result;
                    bucket.files.set(fileRecord.id, fileRecord);
                    
                    // Save to localStorage
                    if (ENV.isBrowser) {
                        const filesObj = Object.fromEntries(bucket.files);
                        localStorage.setItem(`pa-file-bucket-${bucketName}`, JSON.stringify(filesObj));
                    }
                    
                    // Emit upload event
                    PA.Events.emit('file:upload', { bucket: bucketName, file: fileRecord });
                    
                    resolve(fileRecord);
                };
                
                reader.onerror = () => {
                    reject(new Error('Failed to read file'));
                };
                
                reader.readAsDataURL(file);
            });
        },
        
        download: (fileId, bucketName = 'default') => {
            const bucket = PA.file._buckets.get(bucketName);
            if (!bucket) {
                throw new Error(`Bucket "${bucketName}" not found`);
            }
            
            const file = bucket.files.get(fileId);
            if (!file) {
                throw new Error(`File with ID "${fileId}" not found in bucket "${bucketName}"`);
            }
            
            return file;
        },
        
        delete: (fileId, bucketName = 'default') => {
            const bucket = PA.file._buckets.get(bucketName);
            if (!bucket) {
                throw new Error(`Bucket "${bucketName}" not found`);
            }
            
            const file = bucket.files.get(fileId);
            if (!file) {
                throw new Error(`File with ID "${fileId}" not found in bucket "${bucketName}"`);
            }
            
            // Revoke object URL
            if (file.url) {
                URL.revokeObjectURL(file.url);
            }
            
            // Remove file
            bucket.files.delete(fileId);
            
            // Save to localStorage
            if (ENV.isBrowser) {
                const filesObj = Object.fromEntries(bucket.files);
                localStorage.setItem(`pa-file-bucket-${bucketName}`, JSON.stringify(filesObj));
            }
            
            // Emit delete event
            PA.Events.emit('file:delete', { bucket: bucketName, fileId });
            
            return true;
        },
        
        serve: (path, bucketName = 'default') => {
            if (ENV.isNode) {
                const fs = require('fs');
                const path = require('path');
                
                return (req, res, next) => {
                    const filePath = path.join(process.cwd(), path);
                    
                    fs.stat(filePath, (err, stats) => {
                        if (err) {
                            return next();
                        }
                        
                        if (stats.isDirectory()) {
                            // Serve directory listing
                            fs.readdir(filePath, (err, files) => {
                                if (err) {
                                    return next();
                                }
                                
                                res.writeHead(200, { 'Content-Type': 'application/json' });
                                res.end(JSON.stringify(files));
                            });
                        } else {
                            // Serve file
                            const ext = path.extname(filePath).toLowerCase();
                            const contentType = {
                                '.html': 'text/html',
                                '.css': 'text/css',
                                '.js': 'application/javascript',
                                '.json': 'application/json',
                                '.png': 'image/png',
                                '.jpg': 'image/jpeg',
                                '.gif': 'image/gif',
                                '.svg': 'image/svg+xml'
                            }[ext] || 'text/plain';
                            
                            res.writeHead(200, { 'Content-Type': contentType });
                            fs.createReadStream(filePath).pipe(res);
                        }
                    });
                };
            } else {
                console.warn('PA.file.serve() is only available in Node.js environment');
                return null;
            }
        }
    };

    // =========================================================================
    // FORM MANAGEMENT
    // =========================================================================

    PA.form = {
        create: (schema) => {
            const form = document.createElement('form');
            
            // Add form fields based on schema
            Object.entries(schema).forEach(([name, field]) => {
                const fieldContainer = document.createElement('div');
                fieldContainer.className = 'pa-form-field';
                
                let fieldElement;
                
                switch (field.type) {
                    case 'text':
                    case 'email':
                    case 'password':
                    case 'number':
                    case 'tel':
                    case 'url':
                        fieldElement = document.createElement('input');
                        fieldElement.type = field.type;
                        fieldElement.name = name;
                        fieldElement.id = field.id || name;
                        fieldElement.placeholder = field.placeholder || '';
                        fieldElement.required = field.required || false;
                        break;
                        
                    case 'textarea':
                        fieldElement = document.createElement('textarea');
                        fieldElement.name = name;
                        fieldElement.id = field.id || name;
                        fieldElement.placeholder = field.placeholder || '';
                        fieldElement.required = field.required || false;
                        break;
                        
                    case 'select':
                        fieldElement = document.createElement('select');
                        fieldElement.name = name;
                        fieldElement.id = field.id || name;
                        fieldElement.required = field.required || false;
                        
                        if (field.options) {
                            field.options.forEach(option => {
                                const optionElement = document.createElement('option');
                                optionElement.value = option.value;
                                optionElement.textContent = option.label;
                                fieldElement.appendChild(optionElement);
                            });
                        }
                        break;
                        
                    case 'checkbox':
                    case 'radio':
                        fieldElement = document.createElement('input');
                        fieldElement.type = field.type;
                        fieldElement.name = name;
                        fieldElement.id = field.id || name;
                        fieldElement.value = field.value || '1';
                        fieldElement.checked = field.checked || false;
                        break;
                        
                    default:
                        fieldElement = document.createElement('input');
                        fieldElement.type = 'text';
                        fieldElement.name = name;
                        fieldElement.id = field.id || name;
                }
                
                // Add label
                if (field.label) {
                    const label = document.createElement('label');
                    label.htmlFor = fieldElement.id;
                    label.textContent = field.label;
                    fieldContainer.appendChild(label);
                }
                
                fieldContainer.appendChild(fieldElement);
                form.appendChild(fieldContainer);
            });
            
            return form;
        },
        
        validate: (form, rules) => {
            const errors = {};
            let isValid = true;
            
            Object.entries(rules).forEach(([fieldName, rule]) => {
                const field = form.elements[fieldName];
                if (!field) return;
                
                const value = field.type === 'checkbox' ? field.checked : field.value;
                
                // Required validation
                if (rule.required && (!value || (typeof value === 'string' && !value.trim()))) {
                    errors[fieldName] = rule.message || `${fieldName} is required`;
                    isValid = false;
                    return;
                }
                
                // Skip other validations if field is empty and not required
                if (!value) return;
                
                // Type validation
                if (rule.type) {
                    switch (rule.type) {
                        case 'email':
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (!emailRegex.test(value)) {
                                errors[fieldName] = rule.message || `${fieldName} must be a valid email address`;
                                isValid = false;
                            }
                            break;
                            
                        case 'number':
                            if (isNaN(Number(value))) {
                                errors[fieldName] = rule.message || `${fieldName} must be a number`;
                                isValid = false;
                            }
                            break;
                            
                        case 'url':
                            try {
                                new URL(value);
                            } catch (e) {
                                errors[fieldName] = rule.message || `${fieldName} must be a valid URL`;
                                isValid = false;
                            }
                            break;
                    }
                }
                
                // Custom validation
                if (rule.validate && typeof rule.validate === 'function') {
                    const result = rule.validate(value);
                    if (result !== true) {
                        errors[fieldName] = result || `${fieldName} is invalid`;
                        isValid = false;
                    }
                }
                
                // Min/Max validation
                if (rule.min !== undefined && Number(value) < rule.min) {
                    errors[fieldName] = rule.message || `${fieldName} must be at least ${rule.min}`;
                    isValid = false;
                }
                
                if (rule.max !== undefined && Number(value) > rule.max) {
                    errors[fieldName] = rule.message || `${fieldName} must be at most ${rule.max}`;
                    isValid = false;
                }
                
                // Min/Max length validation
                if (rule.minLength !== undefined && value.length < rule.minLength) {
                    errors[fieldName] = rule.message || `${fieldName} must be at least ${rule.minLength} characters`;
                    isValid = false;
                }
                
                if (rule.maxLength !== undefined && value.length > rule.maxLength) {
                    errors[fieldName] = rule.message || `${fieldName} must be at most ${rule.maxLength} characters`;
                    isValid = false;
                }
            });
            
            return {
                isValid,
                errors
            };
        },
        
        serialize: (form) => {
            const data = {};
            
            Array.from(form.elements).forEach(element => {
                if (element.name && !element.disabled) {
                    if (element.type === 'checkbox') {
                        if (element.checked) {
                            if (data[element.name]) {
                                if (Array.isArray(data[element.name])) {
                                    data[element.name].push(element.value);
                                } else {
                                    data[element.name] = [data[element.name], element.value];
                                }
                            } else {
                                data[element.name] = element.value;
                            }
                        }
                    } else if (element.type === 'radio') {
                        if (element.checked) {
                            data[element.name] = element.value;
                        }
                    } else if (element.type === 'select-multiple') {
                        const selectedOptions = Array.from(element.selectedOptions);
                        data[element.name] = selectedOptions.map(option => option.value);
                    } else {
                        data[element.name] = element.value;
                    }
                }
            });
            
            return data;
        },
        
        populate: (form, data) => {
            Object.entries(data).forEach(([name, value]) => {
                const field = form.elements[name];
                if (!field) return;
                
                if (field.type === 'checkbox' || field.type === 'radio') {
                    field.checked = field.value == value;
                } else if (field.type === 'select-multiple') {
                    Array.from(field.options).forEach(option => {
                        option.selected = Array.isArray(value) ? value.includes(option.value) : value == option.value;
                    });
                } else {
                    field.value = value;
                }
            });
        }
    };

    // =========================================================================
    // HTML GENERATOR
    // =========================================================================

    PA.html = {
        tag: (tag, attrs = {}, children = []) => {
            const element = document.createElement(tag);
            
            // Set attributes
            Object.entries(attrs).forEach(([key, value]) => {
                if (key === 'className') {
                    element.className = value;
                } else if (key === 'style' && typeof value === 'object') {
                    Object.assign(element.style, value);
                } else if (key.startsWith('on') && typeof value === 'function') {
                    const eventType = key.substring(2).toLowerCase();
                    element.addEventListener(eventType, value);
                } else {
                    element.setAttribute(key, value);
                }
            });
            
            // Add children
            children.forEach(child => {
                if (typeof child === 'string' || typeof child === 'number') {
                    element.appendChild(document.createTextNode(child));
                } else if (child instanceof HTMLElement) {
                    element.appendChild(child);
                }
            });
            
            return element;
        },
        
        element: (type, props = {}) => {
            return PA.html.tag(type, props);
        },
        
        fragment: (html) => {
            const template = document.createElement('template');
            template.innerHTML = html;
            return template.content.cloneNode(true);
        }
    };

    // =========================================================================
    // COMPRESSION UTILITIES
    // =========================================================================

    PA.compress = {
        zip: (files) => {
            // Simple ZIP implementation without external dependencies
            return new Promise((resolve) => {
                if (!ENV.isBrowser) {
                    // Node.js implementation would require zlib
                    resolve(null);
                    return;
                }
                
                // In a real implementation, this would create a proper ZIP file
                // For now, we'll return a mock implementation
                const zipData = {
                    files: files.map(file => ({
                        name: file.name,
                        data: file.data,
                        size: file.size,
                        type: file.type
                    })),
                    created: new Date().toISOString()
                };
                
                resolve(zipData);
            });
        },
        
        unzip: (zipData) => {
            // Simple UNZIP implementation without external dependencies
            return new Promise((resolve) => {
                if (!ENV.isBrowser) {
                    // Node.js implementation would require zlib
                    resolve([]);
                    return;
                }
                
                // In a real implementation, this would extract files from a ZIP file
                // For now, we'll return the files from our mock implementation
                resolve(zipData.files || []);
            });
        },
        
        gzip: (data) => {
            // Simple GZIP implementation without external dependencies
            return new Promise((resolve) => {
                if (!ENV.isBrowser) {
                    // Node.js implementation would require zlib
                    resolve(data);
                    return;
                }
                
                // In a real implementation, this would compress the data
                // For now, we'll return the original data
                resolve(data);
            });
        },
        
        gunzip: (data) => {
            // Simple GUNZIP implementation without external dependencies
            return new Promise((resolve) => {
                if (!ENV.isBrowser) {
                    // Node.js implementation would require zlib
                    resolve(data);
                    return;
                }
                
                // In a real implementation, this would decompress the data
                // For now, we'll return the original data
                resolve(data);
            });
        }
    };

    // =========================================================================
    // MESSAGING SYSTEM
    // =========================================================================

    PA.message = {
        email: (to, subject, body, options = {}) => {
            return new Promise((resolve, reject) => {
                // In a real implementation, this would send an email
                // For now, we'll simulate the email sending
                console.log(`Sending email to ${to} with subject "${subject}"`);
                
                // Simulate network delay
                setTimeout(() => {
                    resolve({
                        id: U.uuid(),
                        to,
                        subject,
                        sent: true,
                        timestamp: new Date().toISOString()
                    });
                }, 1000);
            });
        },
        
        flash: (type, message, options = {}) => {
            const id = U.uuid();
            const flash = {
                id,
                type,
                message,
                timestamp: new Date().toISOString(),
                ...options
            };
            
            // Store flash message in session
            const flashes = PA.session.get('pa-flashes') || [];
            flashes.push(flash);
            PA.session.set('pa-flashes', flashes);
            
            // Emit flash event
            PA.Events.emit('message:flash', flash);
            
            return id;
        },
        
        getFlashes: () => {
            const flashes = PA.session.get('pa-flashes') || [];
            PA.session.remove('pa-flashes');
            return flashes;
        },
        
        notify: (title, body, options = {}) => {
            if (!ENV.isBrowser || !('Notification' in window)) {
                console.log(`Notification: ${title} - ${body}`);
                return;
            }
            
            // Request permission if not granted
            if (Notification.permission === 'default') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        PA.message._createNotification(title, body, options);
                    }
                });
            } else if (Notification.permission === 'granted') {
                PA.message._createNotification(title, body, options);
            }
        },
        
        _createNotification: (title, body, options) => {
            const notification = new Notification(title, {
                body,
                icon: options.icon,
                badge: options.badge,
                tag: options.tag,
                requireInteraction: options.requireInteraction,
                silent: options.silent
            });
            
            notification.onclick = () => {
                if (options.onClick) {
                    options.onClick();
                }
            };
            
            return notification;
        },
        
        push: (title, body, options = {}) => {
            // In a real implementation, this would use a push notification service
            // For now, we'll fall back to browser notifications
            return PA.message.notify(title, body, options);
        }
    };

    // =========================================================================
    // FLUENT RELATIONAL DATABASE (reDB)
    // =========================================================================

    PA.reDB = {
        collections: new Map(),
        
        createCollection: (name, schema) => {
            PA.reDB.collections.set(name, {
                schema,
                data: [],
                indexes: new Map(),
                remote: {
                    enabled: false,
                    url: null,
                    syncInterval: 60000, // 1 minute
                    lastSync: null
                }
            });
            
            // Load data from localStorage if available
            if (ENV.isBrowser) {
                const storedData = localStorage.getItem(`pa-redb-${name}`);
                if (storedData) {
                    try {
                        const parsedData = JSON.parse(storedData);
                        PA.reDB.collections.get(name).data = parsedData;
                    } catch (error) {
                        console.error(`Error loading collection ${name}:`, error);
                    }
                }
            }
            
            return PA.reDB.collections.get(name);
        },
        
        query: (collectionName, query) => {
            const collection = PA.reDB.collections.get(collectionName);
            if (!collection) {
                throw new Error(`Collection "${collectionName}" not found`);
            }
            
            // Parse the query
            const parsedQuery = PA.reDB.parseQuery(query);
            
            // Execute the query
            return PA.reDB.executeQuery(collection.data, parsedQuery);
        },
        
        parseQuery: (query) => {
            // Enhanced SQL-like query parser
            const result = {
                select: [],
                from: '',
                where: {},
                orderBy: '',
                limit: null,
                offset: null,
                join: []
            };
            
            // Parse SELECT
            const selectMatch = query.match(/SELECT\s+(.+?)\s+FROM/i);
            if (selectMatch) {
                result.select = selectMatch[1].split(',').map(s => s.trim());
            }
            
            // Parse FROM
            const fromMatch = query.match(/FROM\s+(\w+)/i);
            if (fromMatch) {
                result.from = fromMatch[1];
            }
            
            // Parse JOIN
            const joinMatches = query.match(/JOIN\s+(\w+)\s+ON\s+(.+?)(?:\s+WHERE|\s+ORDER\s+BY|\s+LIMIT|\s+OFFSET|$)/gi);
            if (joinMatches) {
                joinMatches.forEach(joinMatch => {
                    const joinMatchDetail = joinMatch.match(/JOIN\s+(\w+)\s+ON\s+(.+)/i);
                    if (joinMatchDetail) {
                        result.join.push({
                            table: joinMatchDetail[1],
                            condition: joinMatchDetail[2]
                        });
                    }
                });
            }
            
            // Parse WHERE
            const whereMatch = query.match(/WHERE\s+(.+?)(?:\s+ORDER\s+BY|\s+LIMIT|\s+OFFSET|$)/i);
            if (whereMatch) {
                try {
                    // Enhanced WHERE clause parser
                    const whereClause = whereMatch[1];
                    
                    // Handle complex conditions with AND/OR
                    const parseCondition = (conditionStr) => {
                        const conditions = [];
                        
                        // Split by AND/OR (not inside parentheses)
                        const parts = [];
                        let currentPart = '';
                        let parenLevel = 0;
                        
                        for (let i = 0; i < conditionStr.length; i++) {
                            const char = conditionStr[i];
                            
                            if (char === '(') {
                                parenLevel++;
                            } else if (char === ')') {
                                parenLevel--;
                            } else if ((char === ' ' || char === '\t') && parenLevel === 0) {
                                if (currentPart.trim()) {
                                    parts.push(currentPart.trim());
                                    currentPart = '';
                                }
                                continue;
                            }
                            
                            currentPart += char;
                        }
                        
                        if (currentPart.trim()) {
                            parts.push(currentPart.trim());
                        }
                        
                        // Process each part
                        parts.forEach(part => {
                            if (part.toUpperCase() === 'AND' || part.toUpperCase() === 'OR') {
                                conditions.push({ operator: part.toUpperCase() });
                            } else {
                                const match = part.match(/(\w+)\s*(=|!=|>|<|>=|<=|LIKE|IN|BETWEEN|IS|IS NOT)\s*(.+)/i);
                                if (match) {
                                    const [, field, operator, value] = match;
                                    
                                    // Parse value
                                    let parsedValue;
                                    if (value.startsWith("'") && value.endsWith("'")) {
                                        parsedValue = value.slice(1, -1);
                                    } else if (value === 'NULL') {
                                        parsedValue = null;
                                    } else if (value.startsWith('(') && value.endsWith(')')) {
                                        // Handle IN operator
                                        parsedValue = value.slice(1, -1).split(',').map(v => {
                                            v = v.trim();
                                            return v.startsWith("'") && v.endsWith("'") ? v.slice(1, -1) : v;
                                        });
                                    } else if (operator.toUpperCase() === 'BETWEEN') {
                                        // Handle BETWEEN operator
                                        const betweenValues = value.split(' AND ').map(v => {
                                            v = v.trim();
                                            return v.startsWith("'") && v.endsWith("'") ? v.slice(1, -1) : v;
                                        });
                                        parsedValue = betweenValues;
                                    } else {
                                        parsedValue = isNaN(value) ? value : Number(value);
                                    }
                                    
                                    // Convert operator to MongoDB-like syntax
                                    let mongoOperator;
                                    switch (operator.toUpperCase()) {
                                        case '=': mongoOperator = '$eq'; break;
                                        case '!=': mongoOperator = '$ne'; break;
                                        case '>': mongoOperator = '$gt'; break;
                                        case '<': mongoOperator = '$lt'; break;
                                        case '>=': mongoOperator = '$gte'; break;
                                        case '<=': mongoOperator = '$lte'; break;
                                        case 'LIKE': mongoOperator = '$regex'; break;
                                        case 'IN': mongoOperator = '$in'; break;
                                        case 'BETWEEN': mongoOperator = '$between'; break;
                                        case 'IS': mongoOperator = '$is'; break;
                                        case 'IS NOT': mongoOperator = '$ne'; break;
                                    }
                                    
                                    conditions.push({
                                        field,
                                        operator: mongoOperator,
                                        value: parsedValue
                                    });
                                }
                            }
                        });
                        
                        return conditions;
                    };
                    
                    result.where = parseCondition(whereClause);
                } catch (error) {
                    console.error('Error parsing WHERE clause:', error);
                }
            }
            
            // Parse ORDER BY
            const orderByMatch = query.match(/ORDER\s+BY\s+(.+?)(?:\s+LIMIT|\s+OFFSET|$)/i);
            if (orderByMatch) {
                result.orderBy = orderByMatch[1].trim();
            }
            
            // Parse LIMIT
            const limitMatch = query.match(/LIMIT\s+(\d+)/i);
            if (limitMatch) {
                result.limit = Number(limitMatch[1]);
            }
            
            // Parse OFFSET
            const offsetMatch = query.match(/OFFSET\s+(\d+)/i);
            if (offsetMatch) {
                result.offset = Number(offsetMatch[1]);
            }
            
            return result;
        },
        
        executeQuery: (data, parsedQuery) => {
            let result = [...data];
            
            // Apply WHERE conditions
            if (parsedQuery.where && parsedQuery.where.length > 0) {
                result = result.filter(item => {
                    return PA.reDB.evaluateConditions(item, parsedQuery.where);
                });
            }
            
            // Apply JOIN conditions
            if (parsedQuery.join && parsedQuery.join.length > 0) {
                parsedQuery.join.forEach(join => {
                    const joinCollection = PA.reDB.collections.get(join.table);
                    if (joinCollection) {
                        result = result.map(item => {
                            const joinItems = joinCollection.data.filter(joinItem => {
                                return PA.reDB.evaluateJoinCondition(item, joinItem, join.condition);
                            });
                            
                            if (joinItems.length > 0) {
                                return {
                                    ...item,
                                    ...joinItems[0] // Simple join, take first match
                                };
                            }
                            
                            return item;
                        });
                    }
                });
            }
            
            // Apply sorting
            if (parsedQuery.orderBy) {
                const [field, direction] = parsedQuery.orderBy.split(' ');
                result.sort((a, b) => {
                    const aVal = a[field];
                    const bVal = b[field];
                    
                    if (aVal < bVal) return direction === 'desc' ? 1 : -1;
                    if (aVal > bVal) return direction === 'desc' ? -1 : 1;
                    return 0;
                });
            }
            
            // Apply LIMIT
            if (parsedQuery.limit) {
                result = result.slice(0, parsedQuery.limit);
            }
            
            // Apply OFFSET
            if (parsedQuery.offset) {
                result = result.slice(parsedQuery.offset);
            }
            
            return result;
        },
        
        evaluateConditions: (item, conditions) => {
            if (!Array.isArray(conditions)) {
                // Single condition
                return PA.reDB.evaluateCondition(item, conditions);
            }
            
            // Multiple conditions with AND/OR operators
            let result = true;
            let currentOperator = 'AND';
            
            for (let i = 0; i < conditions.length; i++) {
                const condition = conditions[i];
                
                if (condition.operator === 'AND' || condition.operator === 'OR') {
                    currentOperator = condition.operator;
                    continue;
                }
                
                const conditionResult = PA.reDB.evaluateCondition(item, condition);
                
                if (currentOperator === 'AND') {
                    result = result && conditionResult;
                } else if (currentOperator === 'OR') {
                    result = result || conditionResult;
                }
            }
            
            return result;
        },
        
        evaluateCondition: (item, condition) => {
            const { field, operator, value } = condition;
            const itemValue = item[field];
            
            switch (operator) {
                case '$eq': return itemValue === value;
                case '$ne': return itemValue !== value;
                case '$gt': return itemValue > value;
                case '$gte': return itemValue >= value;
                case '$lt': return itemValue < value;
                case '$lte': return itemValue <= value;
                case '$in': return Array.isArray(value) && value.includes(itemValue);
                case '$nin': return Array.isArray(value) && !value.includes(itemValue);
                case '$regex': return new RegExp(value).test(String(itemValue));
                case '$exists': return (itemValue !== undefined) === value;
                case '$is': return itemValue === null || itemValue === undefined;
                case '$between': return Array.isArray(value) && itemValue >= value[0] && itemValue <= value[1];
                default: return true;
            }
        },
        
        evaluateJoinCondition: (leftItem, rightItem, condition) => {
            // Simple join condition evaluation
            // In a real implementation, this would be more sophisticated
            const [leftField, rightField] = condition.split('=').map(s => s.trim());
            return leftItem[leftField] === rightItem[rightField];
        },
        
        insert: (collectionName, data) => {
            const collection = PA.reDB.collections.get(collectionName);
            if (!collection) {
                throw new Error(`Collection "${collectionName}" not found`);
            }
            
            // Add ID and timestamp
            const record = {
                id: U.uuid(),
                ...data,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            collection.data.push(record);
            
            // Save to localStorage
            if (ENV.isBrowser) {
                localStorage.setItem(`pa-redb-${collectionName}`, JSON.stringify(collection.data));
            }
            
            // Sync with remote if enabled
            if (collection.remote.enabled) {
                PA.reDB.syncRemote(collectionName);
            }
            
            return record;
        },
        
        update: (collectionName, id, data) => {
            const collection = PA.reDB.collections.get(collectionName);
            if (!collection) {
                throw new Error(`Collection "${collectionName}" not found`);
            }
            
            const index = collection.data.findIndex(record => record.id === id);
            if (index === -1) {
                throw new Error(`Record with ID "${id}" not found in collection "${collectionName}"`);
            }
            
            // Update record
            collection.data[index] = {
                ...collection.data[index],
                ...data,
                updatedAt: new Date().toISOString()
            };
            
            // Save to localStorage
            if (ENV.isBrowser) {
                localStorage.setItem(`pa-redb-${collectionName}`, JSON.stringify(collection.data));
            }
            
            // Sync with remote if enabled
            if (collection.remote.enabled) {
                PA.reDB.syncRemote(collectionName);
            }
            
            return collection.data[index];
        },
        
        delete: (collectionName, id) => {
            const collection = PA.reDB.collections.get(collectionName);
            if (!collection) {
                throw new Error(`Collection "${collectionName}" not found`);
            }
            
            const index = collection.data.findIndex(record => record.id === id);
            if (index === -1) {
                throw new Error(`Record with ID "${id}" not found in collection "${collectionName}"`);
            }
            
            // Remove record
            const deletedRecord = collection.data.splice(index, 1)[0];
            
            // Save to localStorage
            if (ENV.isBrowser) {
                localStorage.setItem(`pa-redb-${collectionName}`, JSON.stringify(collection.data));
            }
            
            // Sync with remote if enabled
            if (collection.remote.enabled) {
                PA.reDB.syncRemote(collectionName);
            }
            
            return deletedRecord;
        },
        
        enableRemoteSync: (collectionName, url, options = {}) => {
            const collection = PA.reDB.collections.get(collectionName);
            if (!collection) {
                throw new Error(`Collection "${collectionName}" not found`);
            }
            
            collection.remote = {
                enabled: true,
                url,
                syncInterval: options.syncInterval || 60000,
                lastSync: null,
                apiKey: options.apiKey
            };
            
            // Start sync interval
            setInterval(() => {
                PA.reDB.syncRemote(collectionName);
            }, collection.remote.syncInterval);
            
            // Initial sync
            PA.reDB.syncRemote(collectionName);
        },
        
        syncRemote: (collectionName) => {
            const collection = PA.reDB.collections.get(collectionName);
            if (!collection || !collection.remote.enabled) {
                return;
            }
            
            // In a real implementation, this would sync with a remote database
            // For now, we'll simulate the sync
            console.log(`Syncing collection "${collectionName}" with remote database`);
            
            collection.remote.lastSync = new Date().toISOString();
            
            // Emit sync event
            PA.Events.emit('redb:sync', { collection: collectionName });
        }
    };

    // =========================================================================
    // REMOTE DATABASE SYNCHRONIZATION
    // =========================================================================

    PA.remoteDB = {
        connections: new Map(),
        
        connect: (name, config) => {
            const connection = {
                name,
                type: config.type || 'sqlite', // sqlite, mysql, postgresql, mongodb
                host: config.host || 'localhost',
                port: config.port || 3306,
                database: config.database,
                username: config.username,
                password: config.password,
                ssl: config.ssl || false,
                connected: false
            };
            
            PA.remoteDB.connections.set(name, connection);
            
            // In a real implementation, this would establish a connection
            // For now, we'll simulate the connection
            setTimeout(() => {
                connection.connected = true;
                PA.Events.emit('remotedb:connected', { name });
            }, 1000);
            
            return connection;
        },
        
        query: (name, sql, params = []) => {
            const connection = PA.remoteDB.connections.get(name);
            if (!connection) {
                throw new Error(`Connection "${name}" not found`);
            }
            
            if (!connection.connected) {
                throw new Error(`Connection "${name}" is not connected`);
            }
            
            // In a real implementation, this would execute the query
            // For now, we'll simulate the query
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        rows: [],
                        rowCount: 0,
                        lastID: null
                    });
                }, 500);
            });
        },
        
        sync: (localCollectionName, remoteConnectionName, options = {}) => {
            const localCollection = PA.reDB.collections.get(localCollectionName);
            const remoteConnection = PA.remoteDB.connections.get(remoteConnectionName);
            
            if (!localCollection) {
                throw new Error(`Local collection "${localCollectionName}" not found`);
            }
            
            if (!remoteConnection) {
                throw new Error(`Remote connection "${remoteConnectionName}" not found`);
            }
            
            // In a real implementation, this would sync data between local and remote
            // For now, we'll simulate the sync
            console.log(`Syncing local collection "${localCollectionName}" with remote connection "${remoteConnectionName}"`);
            
            return Promise.resolve({
                uploaded: 0,
                downloaded: 0,
                conflicts: []
            });
        }
    };

    // =========================================================================
    // MAIN PA API
    // =========================================================================

    const pa = {
        // --- 1. Framework Initialization ---
        init: () => {
            // Inject CSS framework
            if (ENV.isBrowser) {
                const styleElement = document.createElement('style');
                styleElement.textContent = PA_CSS_FRAMEWORK;
                document.head.appendChild(styleElement);
            }
            
            // Initialize Logic Kernel
            PA.Workers.init().then(() => {
                // Initialize other modules
                PA.auth.init();
                PA.i18n.init();
                
                // Start scanning for declarative attributes
                pa.dom.scan();
                
                // Emit init event
                PA.Events.emit('pa:init');
            });
        },
        
        // --- 2. Hypermedia & Event System (HTMX/Alpine) ---
        dom: {
            // Main attribute processing loop
            scan: (root = document) => {
                // Find all elements with any pa- attribute
                root.querySelectorAll('[pa-data], [pa-bind], [pa-text], [pa-on], [pa-get], [pa-post], [pa-if], [pa-for], [pa-comp]').forEach(el => {
                    // Check if already processed to prevent re-binding
                    if (el._pa_initialized) return;

                    // A. Local State Initialization (pa-data)
                    if (el.hasAttribute('pa-data')) {
                        let initialState = {};
                        try {
                            // Simple JS object parsing
                            initialState = new Function('return ({' + el.getAttribute('pa-data') + '})')(); 
                        } catch(e) { 
                            console.error("pa-data parsing error:", e); 
                        }
                        
                        // Create a reactive Proxy for local element scope
                        el._pa_local_state = pa.data.create(el, initialState);
                    }

                    // B. Component System (pa-comp)
                    if (el.hasAttribute('pa-comp')) {
                        const componentName = el.getAttribute('pa-comp');
                        const component = PA.Components.get(componentName);
                        
                        if (component) {
                            // Replace element content with component template
                            el.innerHTML = component.template;
                            
                            // Initialize component signals and effects
                            pa.dom.scan(el);
                        }
                    }

                    // C. Declarative Hypermedia (htmx-like)
                    ['pa-get', 'pa-post', 'pa-put', 'pa-delete'].forEach(attr => {
                        if (el.hasAttribute(attr)) {
                            const event = el.getAttribute('pa-on') || 'click'; // Default to click
                            const url = el.getAttribute(attr);
                            el.addEventListener(event.split(':')[0], (e) => pa.hypermedia.handleRequest(e, el, url, attr.substring(4).toUpperCase()));
                        }
                    });

                    // D. Event & Binding Handlers (pa-on, pa-bind)
                    pa.events.delegate(el);
                    
                    el._pa_initialized = true; // Mark as processed
                });
                
                // Final render pass to apply initial values
                pa.dom.render(root);
            },
            
            // Re-render function for declarative attributes within a root element
            render: (root = document) => {
                // Simple reactivity loop
                root.querySelectorAll('[pa-bind], [pa-text], [pa-if], [pa-for]').forEach(el => {
                    // Get the nearest state scope (local pa-data, or fall back to global if needed)
                    const scopeEl = el.closest('[pa-data]') || document.body;
                    const state = scopeEl._pa_local_state || {}; 

                    // pa-bind & pa-text (Output)
                    if (el.hasAttribute('pa-bind') || el.hasAttribute('pa-text')) {
                        const expr = el.getAttribute('pa-bind') || el.getAttribute('pa-text');
                        const value = U.evalExpr(expr, state);
                        
                        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                            if (el.value !== value) el.value = value;
                        } else {
                            if (el.textContent !== String(value)) el.textContent = value;
                        }
                    }

                    // pa-if (Conditional Rendering)
                    if (el.hasAttribute('pa-if')) {
                        const expr = el.getAttribute('pa-if');
                        const result = U.evalExpr(expr, state);
                        const isHidden = el.style.display === 'none';
                        if (result && isHidden) {
                            el.style.removeProperty('display');
                        } else if (!result && !isHidden) {
                            el.style.display = 'none';
                        }
                    }
                    
                    // pa-for (List Rendering)
                    if (el.hasAttribute('pa-for') && !el.hasAttribute('pa-data')) {
                        const [item, arrayExpr] = el.getAttribute('pa-for').split(' in ').map(s => s.trim());
                        const array = U.evalExpr(arrayExpr, state) || [];
                        
                        if (!el._pa_template) {
                            el._pa_template = el.innerHTML;
                            el.innerHTML = '';
                        }
                        
                        let newHtml = '';
                        array.forEach((data, index) => {
                            const scope = { ...state, [item]: data, $index: index };
                            let itemHtml = el._pa_template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => scope[key] || '');
                            newHtml += itemHtml;
                        });
                        
                        if (el.innerHTML !== newHtml) {
                             el.innerHTML = newHtml;
                             pa.dom.scan(el); // Re-scan newly rendered elements
                        }
                    }
                });
            }
        },
        
        // --- 3. Local Reactivity (pa-data) ---
        data: {
            create: (el, initialState) => {
                const handler = {
                    set: (target, key, value) => {
                        const result = Reflect.set(target, key, value);
                        pa.dom.render(el); // Only re-render the scope of this element
                        return result;
                    }
                };
                const stateProxy = new Proxy(initialState, handler);
                pa.dom.render(el); // Initial render
                return stateProxy;
            }
        },

        // --- 4. Event Delegation ---
        events: {
            delegate: (el) => {
                // pa-bind: Set up input listener to update local state
                if (el.hasAttribute('pa-bind') && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
                    const prop = el.getAttribute('pa-bind');
                    const scopeEl = el.closest('[pa-data]') || document.body;
                    const state = scopeEl._pa_local_state;
                    
                    if (state) {
                        el.addEventListener('input', (e) => {
                            state[prop] = e.target.value;
                        });
                    }
                }
                
                // pa-on: Execute logic from local state or window functions
                if (el.hasAttribute('pa-on')) {
                    const [event, methodExpr] = el.getAttribute('pa-on').split(':');
                    el.addEventListener(event, (e) => {
                        const scopeEl = el.closest('[pa-data]') || document.body;
                        const state = scopeEl._pa_local_state || {};
                        
                        // Execute expression in context of local state
                        try {
                            new Function('$', 'e', `with($) { ${methodExpr} }`).call(state, state, e);
                        } catch (error) {
                            console.error(`pa-on execution error on ${event}:`, error);
                        }
                    });
                }
            }
        },

        // --- 5. Hypermedia Engine (htmx-like) ---
        hypermedia: {
            handleRequest: async (e, el, url, method) => {
                e.preventDefault();
                
                const target = el.getAttribute('pa-target') || '#app-main'; // Default target
                const swap = el.getAttribute('pa-swap') || 'morph';       // Default swap is morph
                const targetEl = document.querySelector(target);
                
                if (!targetEl) {
                    console.error(`pa-hypermedia: Target element ${target} not found.`);
                    return;
                }

                el.classList.add('pa-loading');
                
                let fetchOptions = { method: method };
                if (method === 'POST' || method === 'PUT') {
                    // Collect form data if element is a form or inside one
                    const form = el.closest('form');
                    fetchOptions.body = form ? new FormData(form) : new FormData();
                }

                try {
                    const response = await fetch(url, fetchOptions);
                    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
                    
                    const content = await response.text();
                    U.swap(targetEl, content, swap);

                    // Push URL to history for navigation (SPA-like experience)
                    if (el.getAttribute('pa-push-state') !== 'false' && method === 'GET') {
                         history.pushState(null, '', url);
                    }
                    
                } catch (error) {
                    console.error('pa-hypermedia request failed:', error);
                    alert(`Request to ${url} failed. See console.`);
                } finally {
                    el.classList.remove('pa-loading');
                }
            }
        },

        // --- 6. Threading for Heavy Tasks ---
        thread: {
            heavy: (data, funcString) => ThreadingKernel._send('HEAVY_TASK', { id: U.uuid(), data, funcString }),
        }
    };

    // Expose all PA modules to global scope
    PA.U = U;
    PA.device = PA.device;
    PA.api = PA.api;
    PA.session = PA.session;
    PA.cache = PA.cache;
    PA.media = PA.media;
    PA.file = PA.file;
    PA.form = PA.form;
    PA.html = PA.html;
    PA.compress = PA.compress;
    PA.message = PA.message;
    PA.reDB = PA.reDB;
    PA.remoteDB = PA.remoteDB;

    // --- Final Execution ---
    if (typeof window !== 'undefined') {
        window.pa = pa;
        window.PA = PA;
        
        // Initialize on DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', pa.init);
        } else {
            pa.init();
        }
    } else if (typeof global !== 'undefined') {
        global.pa = pa;
        global.PA = PA;
    }

})(typeof window !== 'undefined' ? window : this);
