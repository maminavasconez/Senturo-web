# Pendientes

## MSPs.dc.html
- [ ] FAQ "Which operating systems are supported?": la frase "Specific capabilities may vary by operating system." debe enlazar a una página INTERNA de Senturo que detalle qué capacidades funcionan con cada MDM/OS (comentario de Louise Etheridge, Oct 17). Por ahora enlaza temporalmente a https://support.senturo.com/knowledge-base/integrations. Reemplazar cuando el usuario pase la URL interna.
- [ ] Definir en qué opción del menú va la página MSP (ahora está como "MSPs" en el menú superior y en Footer > Solutions).
- [ ] Social proof: AGREGAR UN TESTIMONIO en esta página (hoy está el placeholder "Senturo ....."). No hay repositorio de testimonios en el proyecto; los existentes son todos K-12 (Pleasant Grove ISD, Euclid City Schools, Catoosa, Hope City). Idealmente conseguir uno de un MSP (cita + nombre + cargo + empresa).
- [ ] Logo wall: agregar SOLO los logos aprobados. Por el momento se pusieron logos de clientes que son todos escuelas (assets/k12/school-logos.png), porque son los únicos que hay en el proyecto. Para una página de MSPs quizá convenga mostrar MSPs o empresas. El PDF dice que estos logos van "once approved" → esperar que el usuario pase los aprobados y reemplazarlos.
- [ ] Logo wall: el título "Trusted by 1600+ clients in 30 states and 12 industries" viene de la home, no del PDF. Confirmar si se deja o se quita.

## Features.dc.html
- [ ] Comentario Louise Etheridge (Oct 21, 4:00 AM): entiende que Senturo no es totalmente "live" (en el mejor caso hay ~10 s de delay), por eso cambió el texto a "almost real-time" (hero: "Senturo gives you the almost real-time device visibility…"). CONFIRMAR con producto si Senturo trackea totalmente en vivo; si es así, ajustar el texto.
- [ ] Comentario Louise Etheridge (Oct 21, 4:01 AM): dejó "live tracking" en "Go beyond live tracking…" (sección Feature index) porque ya se explicó antes que es casi en vivo. Revisar junto con el punto anterior.
- [ ] Visuales: los 6 bloques de features tienen placeholder "visual / product UI" (el PDF pide visual/product UI; Missing Mode y Broadcast piden 2 visuales). Reemplazar por capturas/UI reales.
- [ ] Botones "Explore X →" (Missing Mode, Senturo Lock, Remote Wipe, Broadcast Messaging, Geofencing, Reporting API): enlazar a las páginas de cada feature cuando existan (hoy apuntan a anclas de la misma página).
- [ ] Menú: se agregó "Features" en el menú superior (también en MSPs). Confirmar ubicación final (¿dentro de Platform?).

## Broadcasting.dc.html
- [ ] Getting started: se reemplazó el placeholder de video por la imagen assets/broadcast-ui.png (UI de Broadcast). Nota interna del PDF: puede reemplazarse por un video de Webflow.
- [ ] Menú: página de feature; por ahora el menú resalta "Features". Desde Features, "Explore Broadcast Messaging →" ya enlaza aquí.
- [ ] Features.dc.html guardada como respaldo en backup-2026-11-18/Features.dc.html (pendiente de revisión del usuario).
- [ ] Comentario Louise Etheridge (Oct 26, 7:59 AM) en FAQ "Can I save a message to use again later?": sobre "Simply save a frequently used message as a template, and then select and edit it when you want to send a new message." → "Martina, I think this is how it works but do let me know if I've got it wrong." CONFIRMAR con producto que así funcionan las plantillas.

## Remote Lock.dc.html
- [ ] Getting started: placeholder de video ("Internal note: Can be replaced with a Webflow video") → reemplazar por el video de Webflow.
- [ ] Callout ChromeOS (NUEVO, comentario Louise Etheridge Oct 26: borró el párrafo de ChromeOS del cuerpo y sugirió ponerlo en un callout como el de Windows). El párrafo original no está en el PDF → se redactó un borrador ("Lock Chromebooks Without Losing Track of Them…"). REVISAR copy con copywriter y reemplazar placeholder "visual / ChromeOS lock screen" por captura real.
  - Este callout completo (eyebrow "ChromeOS remote lock", título "Lock Chromebooks Without Losing Track of Them" y párrafo "Lock ChromeOS devices remotely from your Senturo dashboard, alongside your existing Google Admin setup. Locked Chromebooks stay tracked and visible…") es una RECOMENDACIÓN DE CLAUDE basada en el comentario de la copywriter, NO texto aprobado. Ubicado en Platform compatibility, antes del callout de Windows.
- [ ] Platform compatibility — Comentarios Louise Etheridge (Oct 26, 10:27 y 10:28 AM) sobre "Additional lock actions may also be available through connected MDM integrations, depending on the operating system and configuration.": (1) no entiende qué significa — ¿Senturo Lock podría estar disponible para otros OS si el setup es correcto? ¿Qué acciones de lock adicionales existen además de Lock y Unlock? CONFIRMAR con producto y reescribir la frase. (2) Si Senturo planea expandir Lock/Unlock a iOS/iPadOS y Android, cambiar "No" por "Not yet" en la tabla. CONFIRMAR con producto.
- [x] Use cases › "Missing or stolen device": texto cambiado por sugerencia de Louise Etheridge → "Activate Missing Mode as soon as the device is reported missing, lock it remotely, and keep collecting the information your team needs to recover it."
- [ ] Callout Windows: placeholder "visual / Windows lock screen" → reemplazar por captura real.
- [ ] Getting started — Louise Etheridge comment (Oct 26, 12:27 PM) on "Secure a device directly from its record, or lock several devices at once from your main Devices table. In Missing Mode:": she believes Senturo Lock can't be applied until Missing Mode is activated, and added "In Missing Mode:" so the step diagram doesn't need an extra step. Per the latest help article, "How to Senturo Lock a Device", we can't apply Senturo Lock until we've activated Missing Mode → CONFIRM step order with product and finalize the copy (the sentence currently ends cut off at "In Missing Mode:").
- [ ] Getting started, step 5 "Continue the recovery process" — Louise Etheridge comment (Oct 26, 12:27 PM): she deleted "Activate Missing Mode" from the line under this heading, in case Missing Mode has to come first (current text: "Pull location and network data, send a message, or run other recovery actions as needed."). Related to the Missing Mode step-order note above → CONFIRM with product.
- [ ] Copy a revisar con copywriter (se dejó tal cual el PDF): "Use Senturo Lock works alongside…" (frase sobrante "Use"); "…from your main Devices table. In Missing Mode:" (frase cortada); FAQ "You can lock and unlock actions in bulk".
- [ ] Menú: página de feature; por ahora el menú resalta "Features". Desde Features, "Explore Senturo Lock →" ya enlaza aquí.
- Broadcasting.dc.html guardada como respaldo en backup-2026-11-18/Broadcasting.dc.html.
- Remote Lock.dc.html revisada y guardada como respaldo en backup-2026-11-18/Remote Lock.dc.html (Nov 19).

## Missing Mode.dc.html
- [x] Evidence: se reemplazó el placeholder por la captura real (assets/missing-mode-screenshots.png).
- [ ] Setup steps: se reemplazó el placeholder de video por la captura "Change Status" (assets/missing-mode-change-status.png). Nota interna del PDF: puede reemplazarse por un video de Webflow.
- [ ] Hero: "Available on Windows, macOS, ChromeOS, iOS and Android" (del PDF).
- [ ] Actions › "Make it easier to return" — Louise Etheridge (Nov 11, 5:45 AM): this point and "Customize your message" seemed to say the same thing, so she angled them differently: 1) you can send a message, 2) the different message formats (e.g. text and image). FYI only, no action unless the user disagrees.
- [ ] Automation › "At a time you choose" ("Set a date and time to change device status, or request updated information.") — Louise Etheridge (Nov 11, 5:57 AM): "I'm not sure what scenario this covers." CONFIRM with product what this scenario is, then rewrite or remove it.
- [ ] Recovery record › "Recovery records you can export" — Louise Etheridge (Nov 11, 6:17 AM): this is already explained in the next line ("Export a recovery report…"), so she suggests replacing it with another type of record. ASK product for an alternative record item.
- [ ] Integrations — Louise Etheridge (Nov 11, 6:54 AM) on "With the right permissions in Incident IQ, you can also check a device's location, change its status and start recovery actions directly from its asset record.": she isn't sure why it focuses on Incident IQ, and it sounds like you can't do all this with the other integrations. To avoid confusion she'd delete this line, but wants to check first. CONFIRM with product whether to keep or delete it.
- [ ] FAQ "How do I turn off Missing Mode?" — Louise Etheridge (Nov 11, 6:39 AM): she added the actual detail of how to switch it off ("toggle off Missing Mode from the Device Detail view or Device List view"), taken from a support.senturo.com knowledge-base article (full URL cut off in the screenshot). FYI only; confirm the URL if a link is needed.
- Menú: Features > Missing Mode ahora enlaza a esta página (en MSPs, Features, Broadcasting, Remote Lock). "Explore Missing Mode →" en Features también.

## Remote Wipe.dc.html
- [ ] Wipe options — Louise Etheridge (Nov 17, 10:50 AM) on "…including Microsoft Intune, Jamf Pro, Google Admin Console…": the sentence originally said "Jamf", she changed it to "Jamf Pro" because she thinks that's what we mean. CONFIRM with product (Jamf vs Jamf Pro).
- [ ] Getting started: placeholder de video ("Internal note: Can be replaced with a Webflow video") → reemplazar por video de Webflow.
- [ ] Wipe options: el PDF lo marca como "Comparison block" pero no trae contenido de comparación (solo 2 párrafos). Confirmar si se necesita una tabla Senturo Wipe vs MDM wipe.
- [ ] Getting started, step 5 "Confirm Wipe" ("Approve the confirmation prompt to send the wipe command.") — Louise Etheridge (Nov 17, 2:45 PM): do you just press a button to confirm the wipe, or do you have to type something in? CONFIRM with product and adjust the copy.
- Getting started, step 6 "Continue monitoring" — Louise Etheridge (Nov 17, 2:47 PM): "monitoring" is lowercase on purpose. FYI only.
- [ ] FAQ "Does Senturo replace my MDM for remote wipe?" — Louise Etheridge (Nov 17, 11:13 AM): the answer should start with a yes or no, then explain. If Senturo works alongside an MDM that already has a wipe feature, there'd be no point using Senturo Wipe, so it might be better to delete this question entirely. CONFIRM with product: rewrite (yes/no + explanation) or delete.
- See GENERAL note "Native" below (FAQ "Which devices does Senturo Wipe support?").
- Access control: se reutilizó la captura assets/remote-invite-users.png (rol Remote).
- Menú: Features > Remote Wipe ahora enlaza a esta página en todas las páginas.

## Menú Features (todas las páginas)
- Menú "Features" ahora es desplegable (hover) con: Features overview, Missing Mode, Senturo Lock, Remote Wipe, Broadcast Messaging. Agregado en MSPs, Features, Broadcasting y Remote Lock.
- Remote Wipe y Missing Mode ya creadas y enlazadas en el submenú.
- [ ] Senturo Homepage v3 no tiene aún el menú Features (no se tocó).

## GENERAL (affects the whole website)
- [ ] "Native" wording — Louise Etheridge (Nov 17, 3:40 PM) on Remote Wipe FAQ "Native Senturo Wipe currently supports Windows and macOS.": elsewhere the site says Senturo supports more (Cisco Meraki, etc.), so maybe "native Senturo" is different. We need to be clear about what "native" means. Applies to every page using "native" (Remote Wipe FAQ, Remote Lock "Use native Senturo Lock and Unlock…" + FAQ "Native Senturo Lock currently works with…"). CONFIRM definition with product and make it consistent site-wide (or add a short explanation).

## SITIO COMPLETO (desde Senturo Homepage v3)
- Convención de archivos: URL de senturo.com → nombre de archivo (ej. /platform/incident-response → platform-incident-response.dc.html; /features/missing-mode → features-missing-mode.dc.html). Menú y footer de v3 ya enlazan a estos nombres (Nov 19); los links quedan rotos hasta crear cada página.
- Páginas nuevas ya hechas con nombre antiguo (renombrar/migrar cuando el usuario lo pida): Features.dc.html → platform-features, Missing Mode → features-missing-mode, Remote Lock → features-remote-lock, Remote Wipe → features-remote-wipe, Broadcasting → features-broadcasting, MSPs → solutions-msp.
- Our Data: se dejó como en v3 (#faq).

## solutions-k-12-education.dc.html (plantilla de Solutions)
- [ ] Espacios marcados para capturas del dashboard (4) y logos de integraciones (placeholder).
- [ ] Testimonios: en el .md los nombres no están claramente junto a cada cita; se asignó Catoosa → "super easy to use…", Pleasant Grove ISD → "extremely accurate tracking…", Liberty ISD → "partnered…". CONFIRMAR.
- Logos de escuelas: carrusel animado en Social proof (assets/k12/school-logos-loop.png, armado de 2 capturas de senturo.com). Premios Tech & Learning bajo el Book a Demo del hero.
- [ ] INTERNAL LINKS: los 4 botones "LEARN MORE" apuntan a páginas que aún no existen (platform-mobile-it-fleet-management, platform-security-monitoring, platform-incident-response, platform-policy-automation .dc.html). Revisar y corregir todos los internal links cuando se creen las páginas de Platform.
- Calculadora funcional: Annual loss = devices lost per year × avg. replacement cost. "Number of devices" no entra en el cálculo (según instrucción).

## solutions-business.dc.html
- [ ] 2 espacios marcados para capturas del dashboard (Resolve Incidents, Automate Policies). Fleet reutiliza la captura de K-12; Security Monitoring ya tiene imagen (assets/business/security-monitoring.png).
- [ ] El .md tiene etiquetas sueltas "Troubleshooting" (antes de Automate Company Policies y entre las tarjetas de setup); se omitieron. CONFIRMAR.
- [ ] El .md enlaza Fleet a /platform/mobile-fleet-management; se usó platform-mobile-it-fleet-management según instrucción.
- [ ] Copy: "One-Way Broadcasts…" menciona "district outages" (texto de escuelas) y "Remotely Wipe…" no lleva punto final. Se dejó tal cual.

## solutions-higher-education.dc.html
- [ ] Franja "Trusted by Education IT Professionals…": logos de Oxford, ArtCenter, EPB, HEAR, Lincoln Newark Gainsborough, Texas Tech (assets/higher-ed/client-logos.png, captura). CONFIRMAR que son los aprobados.
- Capturas: Fleet (fleet-geofence.png), Security Monitoring (Business), Resolve Incidents (security-actions.png), Automate Faculty Policies (faculty-policies.png). Todas con imagen.
- [ ] El .md enlaza Fleet a /platform/mobile-fleet-management; se usó platform-mobile-it-fleet-management.
- [ ] Copy tal cual del .md: "With Senturo. you can…" (punto en lugar de coma), "natural hazard." CONFIRMAR con copywriter.

## Backup
- Copia completa del proyecto en `backup-2026-11-18/` (antes de crear páginas nuevas). No modificar.

## solutions-healthcare.dc.html
- Franja "Used by Healthcare Organizations…": logos de World Cancer Research Fund, Gift of Life Michigan, Sioux Lookout FNHA, Iowa Specialty Hospitals & Clinics, County of San Mateo (assets/healthcare/client-logos.png, captura).
- [ ] Capturas reutilizadas de Higher Education/Business (fleet-geofence, security-monitoring, security-actions, faculty-policies). Reemplazar si hay capturas específicas de Healthcare.
- [ ] Request pricing: en lugar del formulario, H2 + párrafo ("Need real-time insights…") + botón a price-request.dc.html, sin recuadro, con glow morado de fondo.
- Guardada (revisada) en backup-2026-11-18/solutions-healthcare.dc.html (Nov 19).
- [ ] El .md enlaza Fleet a /platform/mobile-fleet-management; se usó platform-mobile-it-fleet-management.
- [ ] Copy tal cual del .md: "freedom to teach with any tech" (texto de educación en página de Healthcare). CONFIRMAR con copywriter.

## solutions-retail.dc.html
- Basada en solutions-field-services. Etiqueta "Retail" agregada en el hero (no está en el sitio actual).
- Logos de clientes (assets/retail/client-logos.png, captura): All Aboard America, Stewart’s, Abel’s Quik Shop, Renewal by Andersen, FC, F3 Technologies.
- Fleet: reutiliza assets/field-services/dashboard-cards-hd.png.
- Capturas: Automate Policies: assets/retail/automate-policies.png. Resolve Incidents: assets/retail/resolve-incidents.png. Security Monitoring: assets/retail/security-monitoring.png.
- [ ] Copy tal cual del .md: "it’s easy to enroll devices quickly enroll devices in bulk" (error de redacción). CONFIRMAR con copywriter.
- [ ] El .md enlaza Fleet a /platform/mobile-fleet-management; se usó platform-mobile-it-fleet-management.

## company-about.dc.html
- Basada en la plantilla de Solutions (menú/footer v3). Etiquetas "About Senturo" (hero) y "Our offices" (Where we are) agregadas para coincidir con las demás páginas.
- Línea de tiempo: 2010 "Launch of HiddenApp", 2019 "Under new leadership", 2024 "Senturo was launched" (frases sacadas del texto).
- [ ] Placeholders: fotos de Björn Hall y Benjamin Weston. "Where we are" usa assets/about/world-map.png.
- [ ] Copy tal cual del .md con error: "However, under Under new leadership in 2019, the company saw an opportunity to evolve. for evolution was envisioned." CONFIRMAR con copywriter.

## security.dc.html
- Basada en company-about (menú/footer v3). Etiqueta "Security" agregada en el hero.
- Sellos: SOC 2 Type II, Hosted on Microsoft Azure, AES-256 encryption, 99.9% uptime (datos del texto).
- "Certifications" aparece en la grilla y en el bloque final (según instrucción).
- [ ] Copy tal cual del .md: "Custom controls let you to enable…" (sobra "to"). CONFIRMAR con copywriter.

## frequently-asked-questions.dc.html
- 22 preguntas en 7 categorías (acordeón; la primera de cada categoría abierta). Botones de categoría con anclas (#faq-…). JSON-LD FAQPage en el head.
- Se agregaron espacios faltantes alrededor de negritas ("Go to**Device…", "**Finish**to", "**geofencing**and") y antes de los enlaces "Step-by-step »" pegados al texto.
- Etiqueta "FAQ" agregada en el hero.
- [ ] Copy tal cual del .md: P12 Android dice "View Account Token" pero "download the PLIST configuration file" (PLIST es de iOS). CONFIRMAR con producto.
- [ ] "Our Data" del menú apunta a #faq (como en v3); revisar si debe ir a esta página.

## book-demo.dc.html
- [ ] TODO: conectar el formulario antes del lanzamiento. Hoy SUBMIT valida los campos obligatorios y redirige a https://www.senturo.com/book-demo (GitHub Pages no procesa formularios). No se envían datos.
- Etiqueta "Demo" agregada sobre el H1.

## price-request.dc.html
- Copia exacta de book-demo (layout y formulario). Etiqueta "Pricing" sobre el H1.
- [ ] TODO: conectar el formulario antes del lanzamiento. Hoy SUBMIT redirige a https://www.senturo.com/price-request.

## education-case-studies / business-case-studies .dc.html
- Índices con grilla de tarjetas (placeholder de logo/imagen por cliente). Etiqueta "Case studies" y selector Education / Business agregados en el hero.
- "Read more" enlaza a case-studies-<slug>.dc.html (páginas aún no creadas → links rotos hasta crearlas).
- [ ] PENDIENTE: vincular TODOS los "Read more" (9 Education + 5 Business) cuando se creen las 14 páginas de case studies. Revisar que cada enlace abra su página.
- [ ] Placeholders: logos/imágenes de los 14 clientes.

## case-studies-aism.dc.html (PLANTILLA de case study)
- No existía página de Catoosa; esta es la primera y queda como plantilla para los demás case studies.
- Corrección pedida: "Denture" → "Senturo" en la cita de Sebastian Lim. Se agregó espacio en "Sebastian Lim, ICT Systems Executive".
- Enlazada desde education-case-studies ("Read more").
- [ ] Placeholder: imagen/logo de AISM en el hero.
- [ ] Copy tal cual del .md: comillas sueltas ("…individual device level, “ he says" y "…stolen devices, too.”"). CONFIRMAR con copywriter.

## case-studies-catoosa.dc.html (PLANTILLA OFICIAL de case study)
- Estructura: Hero (etiqueta "Case study · …", H1, intro, placeholder imagen) → About + ficha (Industry, Number of devices, Operating systems, Use cases) → secciones numeradas (Challenge, Solution, extras, Result) → cita destacada (fondo morado oscuro) → "Why … selected Senturo" (lista con checks) → CTA "REQUEST MORE INFO" a book-demo.
- Subtítulo "Tired of the lose-replace cycle" como h3 dentro de The Challenge. Sección extra "More than just recovering Chromebooks" como 03.
- Párrafo duplicado "Senturo has supported Samuel…" solo en The Result (según instrucción).
- Enlazada desde education-case-studies.
- [ ] Placeholder: imagen/logo de Catoosa.
- [ ] Copy tal cual del .md con comillas sueltas ("“Attempting” to find…money.“", "setting it up,’ he says", "fast, ”says"). CONFIRMAR con copywriter.

## case-studies-liberty-isd / boys-latin / pleasant-grove .dc.html
- Plantilla Catoosa. Liberty y Boys' Latin tienen estructura distinta: The Challenge (con lista), The Solution, The Results (subtítulos), "Key Features Used" (lista con checks), "A Lasting Partnership" + cita, y "Why … Recommends Senturo" (párrafo, en lugar de la lista "Why … selected").
- Se corrigieron espacios pegados a negritas y negritas cortadas a mitad de palabra ("Communication gaps m**ade", "instantly, el**iminating").
- Enlazadas desde education-case-studies.
- [ ] Placeholders: imagen/logo de cada cliente.

## case-studies-way-program / little-axe / wcrf .dc.html
- Plantilla Catoosa. Enlazadas desde education-case-studies (WAY, Little Axe) y business-case-studies (WCRF; enlace "volver" a Business case studies).
- Little Axe no tiene "Why … selected": tiene Implementation, The Results (lista) y Conclusion.
- [ ] Placeholders: imagen/logo de cada cliente.

## case-studies-self-help-africa / hope-city / bond-bryan .dc.html
- Plantilla Catoosa; enlace "volver" a Business case studies; enlazadas desde business-case-studies.
- Self Help Africa: botón final "REQUEST PRICING" (tal cual del .md) → book-demo.
- Hope City y Bond Bryan: listas, "Final Verdict" + cita; Bond Bryan con 3 citas de Sam Edwards y "Why Bond Bryan chose Senturo?" (párrafo). Se respetaron itálicas del .md.
- [ ] Placeholders: imagen/logo de cada cliente.
- Los 14 case studies están creados y enlazados desde sus índices.

## case-studies-euclid / appetizer-mobile .dc.html
- Euclid: secciones extra (Overview, Key Features Used, Commercial Fit and Rollout, A Lasting Partnership, FAQ de 6 preguntas en acordeón) y bloque final "Add cross-platform geo-tracking to your stack" con botón a book-demo (en el .md iba a meetings.senturo.com). Ficha con Location, Students & Campuses, Number of devices, Operating Systems, MDM stack. Se quitó el prefijo duplicado "Systems:" del valor de OS y los prefijos "Q:"/"A:" del FAQ.
- Appetizer Mobile: se omitió la línea de Catoosa (no pertenece). Enlace "volver" a Business.
- [ ] Copy tal cual del .md: Appetizer use case "Remove wipe of IT devices" (¿"Remote wipe"?). CONFIRMAR con copywriter.
- [ ] Placeholders: imagen/logo de cada cliente.

## case-studies-volusia.dc.html
- Basada en Euclid (plantilla Catoosa). Franja "At a Glance" (4 cifras del .md), ficha (Location, Students and staff, Number of devices, Operating systems, MDM stack, Help desk ticketing), 7 citas (6 Tony Sharp + Dr. Matt Kuhn), Results y Key Features Used con checks, CTA "Get devices back…" → book-demo, FAQ de 7 preguntas.
- Se omitió la cifra suelta "~100 devices recovered per month" que el .md repite antes de "At a Glance" (ya está en la franja).
- [ ] Placeholder: imagen/logo de Volusia.

## privacy-policy / cookie-policy .dc.html (PLANTILLA LEGAL)
- Hero simple (etiqueta "Legal", H1, intro, Book a Demo) + columna angosta (760px) con el embed de Termageddon (div#policy_embed_div con su data-policy-key). El script termageddon-compatibility.js se inyecta al montar la página (después del div). No se escribió texto legal.
- [ ] Verificar en el sitio publicado que Termageddon carga el texto (requiere internet; si no carga, se muestra el enlace "click here").

## saas-terms.dc.html
- Plantilla legal con texto completo del .md (contrato, sin cambios). Subcláusulas "1.1" en negrita en la misma línea; incisos (a)/(i) como lista sangrada (romanos más adentro). "Warning…" como aviso destacado (naranja). Índice lateral fijo (≥1100px) con las 27 cláusulas + Schedule 1.
- Erratas del original NO corregidas (contrato): p. ej. "19. Right and memedies". CONFIRMAR con legal.

## sub-processors.dc.html
- Plantilla legal. 6 categorías con tabla (Sub-processor, Purpose, Location) + "Updates and Notifications." (con el punto final del .md). Correos privacy@senturo.com con mailto.

## blog.dc.html
- Índice: hero (etiqueta "Resources", H1 "Blog", intro, Book a Demo) + grilla de 52 tarjetas (H3 + resumen + Read more + placeholder imagen), en el orden del .md.
- Internas: blog-mdm-policies.dc.html y blog-senturo-missing-mode.dc.html (ambas creadas y enlazadas). Las otras 50 abren el artículo en senturo.com (pestaña nueva).
- [ ] Placeholders: imagen de cada artículo.
- [ ] Cuando se creen los artículos, cambiar los enlaces externos a las páginas internas.

## blog-mdm-policies.dc.html (PLANTILLA de artículo)
- Cabecera (Back to blog, H1, Published/Updated, resumen) + imagen og:image + cuerpo (máx. 740px) con índice lateral de H2 (≥1100px) + CTA "Respond Before a Device Goes Missing" → book-demo + FAQ acordeón + caja de autor (placeholder foto) + "← Back to blog". JSON-LD Article + FAQPage.
- Bloque WHEN/THEN/FOR/DURING como tarjeta; "Condition → Compliance status → Response" como fórmula destacada.
- Se agregaron espacios antes de enlaces pegados ("recommends[managing…", "a[34%…").
- "More about Björn" enlaza a su LinkedIn (URL del .md), pestaña nueva.
- [ ] Placeholder: foto de Björn Hall.

## blog-senturo-missing-mode.dc.html
- Plantilla de artículo (MDM Policies). CTA "Start Active Recovery Faster" → book-demo. FAQ 6 preguntas. Rutas "Device → Management → …" y "Device leaves geofence → …" como fórmula destacada (enlace "Pull current location" conservado). JSON-LD Article + FAQPage.

## platform-mobile-it-fleet-management.dc.html (PLANTILLA de Platform)
- Hero (etiqueta "Platform", H1, intro, Book a Demo) + 4 secciones alternando imagen (Inventory Management, Custom Search Filters, Enrollment & Integrations + logos assets/int, Loan Management) + CTA final.
- Capturas reutilizadas: k12/fleet-ui-cards.png (Inventory), field-services/dashboard-cards-hd.png (Search Filters), healthcare/setup-multidevice.png (Enrollment).
- [ ] Placeholder: captura de Loan Management.
- Los "LEARN MORE" de Solutions ya enlazan aquí.

## platform-policy-automation / platform-security-monitoring .dc.html
- Plantilla Platform. Policy: capturas reutilizadas (higher-ed/fleet-geofence, retail/automate-policies, higher-ed/faculty-policies, remote-invite-users). Security Monitoring: subtítulo "###" bajo cada "##" como intro; 1 captura reutilizada (retail/security-monitoring) + 3 placeholders (reports, admin log, device history).
- Etiqueta "data retention" (minúsculas en el .md) mostrada como "Data Retention".
- [ ] Security Monitoring page: the "Device History" card uses the same text as the "Customized Reports" card. There's no other text to replace it with, so it has been left duplicated for now. Ask the copywriter or Senturo for the correct "Device History" copy.

## platform-incident-response.dc.html
- Plantilla Platform. "Learn more →" en Data Deletion (remote-wipe), Screen Lock (remote-lock), Screen Snapshots (missing-mode), Message Broadcasts (broadcasting).
- Capturas reutilizadas: retail/resolve-incidents, missing-mode-screenshots-crop, broadcast-ui. [ ] Placeholder: Troubleshooting (pulse & location history).
- Etiquetas "missing mode"/"Remote security actions" mostradas en mayúsculas iniciales.
- Las 5 páginas de Platform están creadas.
