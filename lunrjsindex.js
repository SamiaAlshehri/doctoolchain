var documents = [

{
    "id": 0,
    "uri": "ar/config.html",
    "menu": "ar",
    "title": "configefile-ar",
    "text": " Inhaltsverzeichnis configefile-ar configefile-ar "
},

{
    "id": 1,
    "uri": "ar/10_teams.html",
    "menu": "ar",
    "title": "فريق العمل",
    "text": " Table of Contents فريق العمل فريق العمل Teams فريق العمل فريق العمل Teams Content This section can be omitted for small product developments with only one development team, since the team members are already listed in the previous section. For scaled large products, the organization chart of your teams should be here and an assignment to the topics (e.g. epics, features, &#8230;&#8203;) this team is responsible for. Motivation If you have more than one team at your disposal, it goes without saying that you should have an overview of who works in which (sub-)team and how these teams are organized. The focus should be on (sub-)teams being organized in such a way that they can deliver functions/features or partial products as independently as possible without having to constantly coordinate with everyone else. Notations/Tools Lists of teams (each with assigned people and assigned topics from the roadmap or from the product backlog (e.g., epics or features). Team Team Members Feature &lt;Team-1&gt; PO: &lt;Person-1&gt; &lt;Feature-A&gt; &lt;Team member-2&gt; &lt;Team member-3&gt; &lt;Team-2&gt; PO_&lt;Person-2&gt;_ &lt;Feature-B&gt; &lt;Team member-2&gt; "
},

{
    "id": 2,
    "uri": "ar/05_supporting-models.html",
    "menu": "ar",
    "title": "نمذجة العمل",
    "text": " Table of Contents نمذجة العمل نمذجة العمل Supporting Models نمذجة العمل نمذجة العمل Supporting Models Content Any kind of graphical models that facilitate the understanding (of relationships) of Backlog Items. The diagrams should be linked to items from the Product Backlog. Motivation In the agile world, it has become widespread to write requirements in the form of epics, features or user stories on little cards or to file them in equivalent form in tools. Nevertheless, communication among all stakeholders sometimes becomes much easier if you also use the tools we have come to know over the last decades to make the colloquial language more precise. So don&#8217;t be afraid to use models if they help communication. Don&#8217;t worry: these models don&#8217;t have to be perfect. But especially with increasing complexity (loops or case distinctions), a graphical visualization of the steps of a business process promotes understanding better than many tickets in the system without recognizable sequences and dependencies. Notations/Tools Flowcharts activity diagrams BPMN state models data models UI prototypes mock-ups wireframes Simple modeling tools like Gliffy, Diagrams.Net (formerly DrawIO), &#8230;&#8203;&#8230;&#8203;, or DSLs like PlantUML, Kroki, &#8230;&#8203; or UML modeling tools like Enterprise Architect, Visual Paradigm, MagicDraw are suitable for creating the models. The models should be linked to your backlog items (in both directions) &lt;Diagram Title 1:&gt; . &lt;insert diagram and explanations here &gt; &lt;optional: Link to Epics, Features or Stories&gt; &lt;Diagram Title 2:&gt; . &lt;insert diagram and explanations here &gt; &lt;optional: Link to Epics, Features or Stories&gt; &lt;Diagram Title 3:&gt; . &lt;insert diagram and explanations here &gt; &lt;optional: Link to Epics, Features or Stories&gt; . . . &lt;Diagram Title n:&gt; . &lt;insert diagram and explanations here &gt; &lt;optional: Link to Epics, Features or Stories&gt; "
},

{
    "id": 3,
    "uri": "ar/02_stakeholder.html",
    "menu": "ar",
    "title": "اصحاب المصلحة",
    "text": " Table of Contents اصحاب المصلحة أصحاب المصالح اصحاب المصلحة أصحاب المصالح Content A (prioritized) list of your stakeholders, along with indications of where these stakeholders can help (or hinder) the analysis work. Motivation Stakeholders are the most important sources for requirements. Therefore, you should know and document them. You need to know who can help you with what or hinder you in what way. You need to know who has what influence - and if opinions differ, you need to mediate or decide. Without explicitly identified stakeholders, all this is difficult. Notations/Tools Tables or lists (simple form) Possibly stakeholder map (more complex form) Below we have included a simple stakeholder list as an example. The order \"role before person\" has been chosen deliberately. This order has proven itself since requirements normally always represent needs from the perspective of a role, but the person taking on the role can change during the project. If required, you can also add further columns (contact data, &#8230;&#8203;) - but consider the effort for their maintenance. Role الدور Person الاسم Topic الموضوع Influence التاثير &lt;Role-1&gt; &lt;Person-1&gt; &lt;Topic-1&gt; _&lt;Influence-1&gt; &lt;Role-2&gt; &lt;Person-2&gt; &lt;Topic-2&gt; _&lt;Influence-2&gt; "
},

{
    "id": 4,
    "uri": "ar/11_roadmap.html",
    "menu": "ar",
    "title": "خارطة الطريق",
    "text": " Table of Contents خارطة الطريق خارطة الطريق Roadmap خارطة الطريق خارطة الطريق Roadmap Content \"Delivery artifacts put on the timeline\" - who delivers what and when? Motivation Agile projects also need a plan. The more distant a goal is, the less precise the plan can be. The closer, the more precise. An explicitly known roadmap enables all participants to coordinate with each other and to think along with each other, and therefore to take into account what is still to come in the medium term when making short-term decisions. If you only live from hand to mouth, you may unknowingly make short-term decisions that are contrary to longer-term product success. In our courses we show you how rough or fine a roadmap can, may or should be. Notations/Tools Whatever you have in use as a planning tool or which allows you to present, if possible on one page, an appropriate overview over a longer period of time. &lt; Insert your planning here&gt; "
},

{
    "id": 5,
    "uri": "ar/06_quality-requirements.html",
    "menu": "ar",
    "title": "متطلبات الجودة",
    "text": " Table of Contents متطلبات الجودة متطلبات الجودة (Quality Requirements-ar) متطلبات الجودة متطلبات الجودة (Quality Requirements-ar) Content Quality requirements are the \"how\" to the \"what\" - qualitative definitions or precisions of the functional requirements. Motivation Our experience shows: Quality requirements are (unfortunately) still severely underestimated, not only in the agile world. Everyone wants good quality products and services, but only a few make it explicit what exactly is meant by this. Some quality requirements (such as response times) can perhaps be integrated directly into a story (or added as an acceptance criterion). However, the vast majority of quality requirements relate to many, if not all, of the functional requirements in the product backlog. Therefore, as a product owner, you need somewhere to specify and assign the desired qualities of your products and services. For this activity, industry-proven checklists (such as ISO 25010 and others) are available to help you quickly identify and manage the most important categories. Notations/Tools Simple textual scenarios, possibly structured according to the sections of Q42, or the ISO 25010 quality tree, or according to VOLERE. &lt; quality requirement or scenario 1&gt; : &lt;Link to functional requirements or scope for this quality &gt; &lt; quality requirement or scenario 2&gt; : &lt;Link to functional requirements or scope for this quality &gt; &lt; quality requirement or scenario 3&gt; : &lt;Link to functional requirements or scope for this quality &gt; . . . &lt; quality requirement or scenario n&gt; : &lt;Link to functional requirements or scope for this quality &gt; "
},

{
    "id": 6,
    "uri": "ar/about-req42.html",
    "menu": "ar",
    "title": "About req42",
    "text": " Table of Contents About req42 About req42 d :keywords: requirements, documentation, framework, req42 About req42 req42, the framework for collecting, documenting and communicating requirements. Created and maintained by Dr. Peter Hruschka, Markus Meuten and contributors. Template Revision: 2.0 EN (based on asciidoc), March 2023 &#169; We acknowledge that this document uses material from the req42 framework, https://req42.de "
},

{
    "id": 7,
    "uri": "ar/12_risks-assumptions.html",
    "menu": "ar",
    "title": "المخاطر والفرضيات",
    "text": " Table of Contents المخاطر والفرضيات المخاطر والفرضيات Risks &amp; Assumptionsar المخاطر والفرضيات المخاطر والفرضيات Risks &amp; Assumptionsar Content (Prioritized) lists of risks you have identified and a list of assumptions you have made as a basis for decisions. Motivation \"Risk management is project management for adults\" says Tim Lister of the Atlantic Systems Guild\". With this in mind, you should keep your risks under control as a product owner. req42 provides you with the means to consciously manage risks. Especially when prioritizing your requirements you should balance business value and risk reduction. Notations/Tools Simple tables or lists are often already sufficient. 12.1. Risks Id Text Probability Damage Amount Possible Measures 12.2. Assumptions Id Text "
},

{
    "id": 8,
    "uri": "ar/09_assets.html",
    "menu": "ar",
    "title": "اصول المنتج",
    "text": " Table of Contents اصول المنتج اصول المنتج Assets اصول المنتج اصول المنتج Assets Content Under assets we summarize everything that your sponsors or clients give you to enable you as a product owner (together with your team) to do your job successfully. Assets definitely include time and budget, i.e., resources they give you to do your job. You may have to get your team with these resources yourself, or they may also provide you with staff (your team), workspace, infrastructure, etc. Motivation If you take on the job as a product owner you have to negotiate these assets with your sponsor or client and certainly in the end also account for their use (through hopefully successful results). In any case, you should know what you have at your disposal in terms of money, personnel, time, infrastructure, &#8230;&#8203; at your disposal. These assets are an essential boundary condition for your work as a product owner. Notations/Tools Simple lists or tables 9.1 Budget (possibly structured according to roadmap or intermediate goals, or divided into personnel budget, material budget, &#8230;&#8203;) 9.2 Time frame/final date 9.3 Team members (simple enumeration of team members for small team. Or a link to complex team structure in section 10). 9.4 External resources "
},

{
    "id": 9,
    "uri": "ar/01_business-goals.html",
    "menu": "ar",
    "title": "Business Goals Document",
    "text": " Inhaltsverzeichnis Business Goals Document اهداف العمل (Business Goals) Business Goals Document اهداف العمل (Business Goals) Content The business objectives of your product development or project. Short and concise, understandable and transparent for your stakeholders. Motivation Goals must be specified and agreed upon to the point where everyone involved has a clear idea of what is to be accomplished and in what time frames. Establishing vision and goals guides the team in developing detailed requirements and avoids fragmentation. Perhaps your clients gave you rough goals or a vision when they entrusted you with the role of product owner. Often, however, the precision of these specifications is not enough to lead a team systematically to success. Notations/Tools A wide variety of means of expression are available for defining goals, which you can choose according to your mood. Our recommendation: Notation in the form of PAM (Purpose, Advantage, Metric). Alternative forms of notation: Product case News from the Future Product Canvas Value Proposition There is only one thing you should never do: Work without explicit goals or visions. Goal definitions according to PAM: Goal 1: Advantage 1: Metric 1: Goal 2: Advantage 2: Metric 2: Goal 3: Advantage 3: Metric 3: "
},

{
    "id": 10,
    "uri": "ar/07_constraints.html",
    "menu": "ar",
    "title": "الثوابت",
    "text": " Table of Contents الثوابت الثوابت Constraints الثوابت الثوابت Constraints Content Technological or organizational (mandated) constraints for the development process, such as mandatory activities, prescribed documents and their content, milestones to be met, &#8230;&#8203; Motivation Such constraints are also requirements. And since they often apply to several or even all functional requirements, they are difficult to accommodate in the ordered product backlog. Just make sure that all stakeholders know these constraints and have access to them when needed. Form Simple lists, possibly organized by category. 7.1 Organizational Constraints &lt;OrgConstraint1&gt; &lt;OrgConstraint2&gt; &lt;OrgContraint3&gt; 7.2 Technical Constraints &lt;TechConstraint1&gt; &lt;TechConstraint2&gt; &lt;TechContraint3&gt; "
},

{
    "id": 11,
    "uri": "ar/04_product-backlog.html",
    "menu": "ar",
    "title": "قائمة المنتج",
    "text": " Table of Contents قائمة المنتج قائمة المنتج Product Backlog قائمة المنتج قائمة المنتج Product Backlog Content An ordered list of product backlog items (at different levels of granularity: e.g. epics, features and user stories). Backlog items should be prioritized (better term: ranked) among each other. The items with the greatest added value in terms of implementation effort should be at the top of the backlog to be implemented next. You have to define explicitly what added value means for you and your development. The simplest definition is the business added value for the customer when implementing the requirement. Motivation The Scrum Guide defines: \"The Product Backlog is an ordered list of everything that is known to be included in the product. It serves as the single source of requirements for all changes to the product. The Product Owner is responsible for the Product Backlog, its contents, access to it, and the order of entries. A Product Backlog is never complete. During its initial development steps, it identifies the requirements that are initially known and best understood. The Product Backlog evolves with the product and its use. It is dynamic; it constantly adapts to make clear for the product what it needs to be adequate to its task, to compete, and to provide the required benefits.\" As long as a product exists, so does its Product Backlog. So you see: the Product Backlog is really important for successful work as a Product Owner. But please fill in the other artifacts as well. Your job may not start with the Product Backlog and it certainly doesn&#8217;t end with the Product Backlog. Notations/Tools Proven (regardless of granularity) for epics, features and user stories is the formula: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt;. For the more abstract levels (epics, features), compound nouns may also be suitable for describing functionality. Use ALM tools or ticket systems (JIRA or Azure DevOps) or wikis (like Confluence) to manage your epics, features and stories (linked and ordered). A two-dimensional representation of the product backlog in the form of a story map has proven particularly useful. EPIC 1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . FEATURE 1.1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 1.1.1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 1.1.x.:As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . EPIC 2: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . FEATURE 2.1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 2.1.1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 2.1.2: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . FEATURE 2.2: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 2.2.1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 2.2.2: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . EPIC 3: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . "
},

{
    "id": 12,
    "uri": "ar/08_domain-terminology.html",
    "menu": "ar",
    "title": "مصطلحات المجال",
    "text": " Table of Contents مصطلحات المجال مصطلحات المجال Domain Terminology مصطلحات المجال مصطلحات المجال Domain Terminology Content A glossary of technical terms with definitions. The \"ubiquitous language\" of your domain Motivation Terms from your domain appear in every epic, feature, or story. These terms should be clear to everyone involved. And that&#8217;s why it is desirable to have a glossary of such terms for a project or product development. Make sure that everyone involved speaks a common language - and has access to agreed-upon definitions of terms instead of bringing new words into play in every meeting. Notations/Tools Alphabetically ordered list of term definitions Term Definition &lt;Term-1&gt; &lt;Definition-1&gt; &lt;Term-2&gt; &lt;Definition-2&gt; "
},

{
    "id": 13,
    "uri": "ar/03_scope.html",
    "menu": "ar",
    "title": "Scope",
    "text": " Table of Contents Scope نطاق العمل Scope Scope نطاق العمل Scope Content Your product with all external interfaces to (human and automated) neighbors, resp. neighboring systems. Motivation Scope is the area that you can influence. The environment of the product, to which there are certainly many interfaces, represents the context. The context cannot (usually) be decided by you alone, but can often be negotiated. To gain clarity it is important to describe both as much as possible and especially to define the boundary between the two scopes. req42 recommends that you start with the business scope and do not limit the product scope too early. The decision about the product scope should be a conscious one. Read more about this indispensable topic in the blog post \"Scope is not equal to Scope\" or in [2]. In our courses, you will practice scope delimitation using a realistic case study. Notations/Tools There are many different means of expression for representing scope delineation, but a good scope delineation makes the interfaces to the context explicit (e.g., in terms of inputs and outputs, of services provided and required, &#8230;&#8203;). Various forms of context diagrams Context chart Insert [Context diagram] or [Context table] here. Optional: add table with explanations of interfaces: Interface Name Meaning/Explanation &lt;IF-1&gt; &lt;Meaning-1&gt; &lt;IF-2&gt; &lt;Meaning-2&gt; "
},

{
    "id": 14,
    "uri": "en/config.html",
    "menu": "en",
    "title": "config.adoc",
    "text": " "
},

{
    "id": 15,
    "uri": "en/10_teams.html",
    "menu": "en",
    "title": "Teams",
    "text": " Table of Contents Teams Teams Content This section can be omitted for small product developments with only one development team, since the team members are already listed in the previous section. For scaled large products, the organization chart of your teams should be here and an assignment to the topics (e.g. epics, features, &#8230;&#8203;) this team is responsible for. Motivation If you have more than one team at your disposal, it goes without saying that you should have an overview of who works in which (sub-)team and how these teams are organized. The focus should be on (sub-)teams being organized in such a way that they can deliver functions/features or partial products as independently as possible without having to constantly coordinate with everyone else. Notations/Tools Lists of teams (each with assigned people and assigned topics from the roadmap or from the product backlog (e.g., epics or features). Team Team Members Feature &lt;Team-1&gt; PO: &lt;Person-1&gt; &lt;Feature-A&gt; &lt;Team member-2&gt; &lt;Team member-3&gt; &lt;Team-2&gt; PO_&lt;Person-2&gt;_ &lt;Feature-B&gt; &lt;Team member-2&gt; "
},

{
    "id": 16,
    "uri": "en/05_supporting-models.html",
    "menu": "en",
    "title": "Supporting Models",
    "text": " Table of Contents Supporting Models Supporting Models Content Any kind of graphical models that facilitate the understanding (of relationships) of Backlog Items. The diagrams should be linked to items from the Product Backlog. Motivation In the agile world, it has become widespread to write requirements in the form of epics, features or user stories on little cards or to file them in equivalent form in tools. Nevertheless, communication among all stakeholders sometimes becomes much easier if you also use the tools we have come to know over the last decades to make the colloquial language more precise. So don&#8217;t be afraid to use models if they help communication. Don&#8217;t worry: these models don&#8217;t have to be perfect. But especially with increasing complexity (loops or case distinctions), a graphical visualization of the steps of a business process promotes understanding better than many tickets in the system without recognizable sequences and dependencies. Notations/Tools Flowcharts activity diagrams BPMN state models data models UI prototypes mock-ups wireframes Simple modeling tools like Gliffy, Diagrams.Net (formerly DrawIO), &#8230;&#8203;&#8230;&#8203;, or DSLs like PlantUML, Kroki, &#8230;&#8203; or UML modeling tools like Enterprise Architect, Visual Paradigm, MagicDraw are suitable for creating the models. The models should be linked to your backlog items (in both directions) &lt;Diagram Title 1:&gt; . &lt;insert diagram and explanations here &gt; &lt;optional: Link to Epics, Features or Stories&gt; &lt;Diagram Title 2:&gt; . &lt;insert diagram and explanations here &gt; &lt;optional: Link to Epics, Features or Stories&gt; &lt;Diagram Title 3:&gt; . &lt;insert diagram and explanations here &gt; &lt;optional: Link to Epics, Features or Stories&gt; . . . &lt;Diagram Title n:&gt; . &lt;insert diagram and explanations here &gt; &lt;optional: Link to Epics, Features or Stories&gt; "
},

{
    "id": 17,
    "uri": "en/02_stakeholder.html",
    "menu": "en",
    "title": "Stakeholder",
    "text": " Table of Contents Stakeholder Stakeholder Content A (prioritized) list of your stakeholders, along with indications of where these stakeholders can help (or hinder) the analysis work. Motivation Stakeholders are the most important sources for requirements. Therefore, you should know and document them. You need to know who can help you with what or hinder you in what way. You need to know who has what influence - and if opinions differ, you need to mediate or decide. Without explicitly identified stakeholders, all this is difficult. Notations/Tools Tables or lists (simple form) Possibly stakeholder map (more complex form) Below we have included a simple stakeholder list as an example. The order \"role before person\" has been chosen deliberately. This order has proven itself since requirements normally always represent needs from the perspective of a role, but the person taking on the role can change during the project. If required, you can also add further columns (contact data, &#8230;&#8203;) - but consider the effort for their maintenance. Role Person Topic Influence &lt;Role-1&gt; &lt;Person-1&gt; &lt;Topic-1&gt; _&lt;Influence-1&gt; &lt;Role-2&gt; &lt;Person-2&gt; &lt;Topic-2&gt; _&lt;Influence-2&gt; "
},

{
    "id": 18,
    "uri": "en/about-req42.html",
    "menu": "en",
    "title": "about-req42.adoc",
    "text": " About req42 req42, the framework for collecting, documenting and communicating requirements. Created and maintained by Dr. Peter Hruschka, Markus Meuten and contributors. Template Revision: 2.0 EN (based on asciidoc), March 2023 &#169; We acknowledge that this document uses material from the req42 framework, https://req42.de "
},

{
    "id": 19,
    "uri": "en/12_risks-assumptions.html",
    "menu": "en",
    "title": "Risks &amp; Assumptions",
    "text": " Table of Contents Risks &amp; Assumptions 12.1. Risks 12.2. Assumptions Risks &amp; Assumptions Content (Prioritized) lists of risks you have identified and a list of assumptions you have made as a basis for decisions. Motivation \"Risk management is project management for adults\" says Tim Lister of the Atlantic Systems Guild\". With this in mind, you should keep your risks under control as a product owner. req42 provides you with the means to consciously manage risks. Especially when prioritizing your requirements you should balance business value and risk reduction. Notations/Tools Simple tables or lists are often already sufficient. 12.1. Risks Id Text Probability Damage Amount Possible Measures 12.2. Assumptions Id Text "
},

{
    "id": 20,
    "uri": "en/11_roadmap.html",
    "menu": "en",
    "title": "Roadmap",
    "text": " Table of Contents Roadmap Roadmap Content \"Delivery artifacts put on the timeline\" - who delivers what and when? Motivation Agile projects also need a plan. The more distant a goal is, the less precise the plan can be. The closer, the more precise. An explicitly known roadmap enables all participants to coordinate with each other and to think along with each other, and therefore to take into account what is still to come in the medium term when making short-term decisions. If you only live from hand to mouth, you may unknowingly make short-term decisions that are contrary to longer-term product success. In our courses we show you how rough or fine a roadmap can, may or should be. Notations/Tools Whatever you have in use as a planning tool or which allows you to present, if possible on one page, an appropriate overview over a longer period of time. &lt; Insert your planning here&gt; "
},

{
    "id": 21,
    "uri": "en/06_quality-requirements.html",
    "menu": "en",
    "title": "Quality Requirements",
    "text": " Table of Contents Quality Requirements Quality Requirements Content Quality requirements are the \"how\" to the \"what\" - qualitative definitions or precisions of the functional requirements. Motivation Our experience shows: Quality requirements are (unfortunately) still severely underestimated, not only in the agile world. Everyone wants good quality products and services, but only a few make it explicit what exactly is meant by this. Some quality requirements (such as response times) can perhaps be integrated directly into a story (or added as an acceptance criterion). However, the vast majority of quality requirements relate to many, if not all, of the functional requirements in the product backlog. Therefore, as a product owner, you need somewhere to specify and assign the desired qualities of your products and services. For this activity, industry-proven checklists (such as ISO 25010 and others) are available to help you quickly identify and manage the most important categories. Notations/Tools Simple textual scenarios, possibly structured according to the sections of Q42, or the ISO 25010 quality tree, or according to VOLERE. &lt; quality requirement or scenario 1&gt; : &lt;Link to functional requirements or scope for this quality &gt; &lt; quality requirement or scenario 2&gt; : &lt;Link to functional requirements or scope for this quality &gt; &lt; quality requirement or scenario 3&gt; : &lt;Link to functional requirements or scope for this quality &gt; . . . &lt; quality requirement or scenario n&gt; : &lt;Link to functional requirements or scope for this quality &gt; "
},

{
    "id": 22,
    "uri": "en/01_business-goals.html",
    "menu": "en",
    "title": "business-goals.adoc",
    "text": " Table of Contents Business Goals Business Goals Content The business objectives of your product development or project. Short and concise, understandable and transparent for your stakeholders. Motivation Goals must be specified and agreed upon to the point where everyone involved has a clear idea of what is to be accomplished and in what time frames. Establishing vision and goals guides the team in developing detailed requirements and avoids fragmentation. Perhaps your clients gave you rough goals or a vision when they entrusted you with the role of product owner. Often, however, the precision of these specifications is not enough to lead a team systematically to success. Notations/Tools A wide variety of means of expression are available for defining goals, which you can choose according to your mood. Our recommendation: Notation in the form of PAM (Purpose, Advantage, Metric). Alternative forms of notation: Product case News from the Future Product Canvas Value Proposition There is only one thing you should never do: Work without explicit goals or visions. Goal definitions according to PAM: Goal 1: Advantage 1: Metric 1: Goal 2: Advantage 2: Metric 2: Goal 3: Advantage 3: Metric 3: "
},

{
    "id": 23,
    "uri": "en/09_assets.html",
    "menu": "en",
    "title": "Assets",
    "text": " Table of Contents Assets 9.1 Budget 9.2 Time frame/final date 9.3 Team members 9.4 External resources Assets Content Under assets we summarize everything that your sponsors or clients give you to enable you as a product owner (together with your team) to do your job successfully. Assets definitely include time and budget, i.e., resources they give you to do your job. You may have to get your team with these resources yourself, or they may also provide you with staff (your team), workspace, infrastructure, etc. Motivation If you take on the job as a product owner you have to negotiate these assets with your sponsor or client and certainly in the end also account for their use (through hopefully successful results). In any case, you should know what you have at your disposal in terms of money, personnel, time, infrastructure, &#8230;&#8203; at your disposal. These assets are an essential boundary condition for your work as a product owner. Notations/Tools Simple lists or tables 9.1 Budget (possibly structured according to roadmap or intermediate goals, or divided into personnel budget, material budget, &#8230;&#8203;) 9.2 Time frame/final date 9.3 Team members (simple enumeration of team members for small team. Or a link to complex team structure in section 10). 9.4 External resources "
},

{
    "id": 24,
    "uri": "en/07_constraints.html",
    "menu": "en",
    "title": "Constraints",
    "text": " Table of Contents Constraints 7.1 Organizational Constraints 7.2 Technical Constraints Constraints Content Technological or organizational (mandated) constraints for the development process, such as mandatory activities, prescribed documents and their content, milestones to be met, &#8230;&#8203; Motivation Such constraints are also requirements. And since they often apply to several or even all functional requirements, they are difficult to accommodate in the ordered product backlog. Just make sure that all stakeholders know these constraints and have access to them when needed. Form Simple lists, possibly organized by category. 7.1 Organizational Constraints &lt;OrgConstraint1&gt; &lt;OrgConstraint2&gt; &lt;OrgContraint3&gt; 7.2 Technical Constraints &lt;TechConstraint1&gt; &lt;TechConstraint2&gt; &lt;TechContraint3&gt; "
},

{
    "id": 25,
    "uri": "en/08_domain-terminology.html",
    "menu": "en",
    "title": "Domain Terminology",
    "text": " Table of Contents Domain Terminology Domain Terminology Content A glossary of technical terms with definitions. The \"ubiquitous language\" of your domain Motivation Terms from your domain appear in every epic, feature, or story. These terms should be clear to everyone involved. And that&#8217;s why it is desirable to have a glossary of such terms for a project or product development. Make sure that everyone involved speaks a common language - and has access to agreed-upon definitions of terms instead of bringing new words into play in every meeting. Notations/Tools Alphabetically ordered list of term definitions Term Definition &lt;Term-1&gt; &lt;Definition-1&gt; &lt;Term-2&gt; &lt;Definition-2&gt; "
},

{
    "id": 26,
    "uri": "en/04_product-backlog.html",
    "menu": "en",
    "title": "Product Backlog",
    "text": " Table of Contents Product Backlog Product Backlog Content An ordered list of product backlog items (at different levels of granularity: e.g. epics, features and user stories). Backlog items should be prioritized (better term: ranked) among each other. The items with the greatest added value in terms of implementation effort should be at the top of the backlog to be implemented next. You have to define explicitly what added value means for you and your development. The simplest definition is the business added value for the customer when implementing the requirement. Motivation The Scrum Guide defines: \"The Product Backlog is an ordered list of everything that is known to be included in the product. It serves as the single source of requirements for all changes to the product. The Product Owner is responsible for the Product Backlog, its contents, access to it, and the order of entries. A Product Backlog is never complete. During its initial development steps, it identifies the requirements that are initially known and best understood. The Product Backlog evolves with the product and its use. It is dynamic; it constantly adapts to make clear for the product what it needs to be adequate to its task, to compete, and to provide the required benefits.\" As long as a product exists, so does its Product Backlog. So you see: the Product Backlog is really important for successful work as a Product Owner. But please fill in the other artifacts as well. Your job may not start with the Product Backlog and it certainly doesn&#8217;t end with the Product Backlog. Notations/Tools Proven (regardless of granularity) for epics, features and user stories is the formula: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt;. For the more abstract levels (epics, features), compound nouns may also be suitable for describing functionality. Use ALM tools or ticket systems (JIRA or Azure DevOps) or wikis (like Confluence) to manage your epics, features and stories (linked and ordered). A two-dimensional representation of the product backlog in the form of a story map has proven particularly useful. EPIC 1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . FEATURE 1.1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 1.1.1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 1.1.x.:As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . EPIC 2: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . FEATURE 2.1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 2.1.1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 2.1.2: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . FEATURE 2.2: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 2.2.1: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . STORY 2.2.2: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . EPIC 3: As &lt;role&gt; I want &lt;functionality&gt; so that &lt;advantage&gt; . &lt;optional: Link to models&gt; . "
},

{
    "id": 27,
    "uri": "en/03_scope.html",
    "menu": "en",
    "title": "Scope",
    "text": " Table of Contents Scope Scope Content Your product with all external interfaces to (human and automated) neighbors, resp. neighboring systems. Motivation Scope is the area that you can influence. The environment of the product, to which there are certainly many interfaces, represents the context. The context cannot (usually) be decided by you alone, but can often be negotiated. To gain clarity it is important to describe both as much as possible and especially to define the boundary between the two scopes. req42 recommends that you start with the business scope and do not limit the product scope too early. The decision about the product scope should be a conscious one. Read more about this indispensable topic in the blog post \"Scope is not equal to Scope\" or in [2]. In our courses, you will practice scope delimitation using a realistic case study. Notations/Tools There are many different means of expression for representing scope delineation, but a good scope delineation makes the interfaces to the context explicit (e.g., in terms of inputs and outputs, of services provided and required, &#8230;&#8203;). Various forms of context diagrams Context chart Insert [Context diagram] or [Context table] here. Optional: add table with explanations of interfaces: Interface Name Meaning/Explanation &lt;IF-1&gt; &lt;Meaning-1&gt; &lt;IF-2&gt; &lt;Meaning-2&gt; "
},

{
    "id": 28,
    "uri": "search.html",
    "menu": "-",
    "title": "search",
    "text": " Search Results "
},

{
    "id": 29,
    "uri": "lunrjsindex.html",
    "menu": "-",
    "title": "null",
    "text": " will be replaced by the index "
},

];
