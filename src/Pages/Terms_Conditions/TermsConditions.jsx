import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

function TermsConditions() {
  const [page, setPages] = useState(0);

  return (
    <div className="flex flex-col items-center justify-start py-[50px]">
      <h1 className="text-[40px] lg:text-[100px] font-bold text-[#0a0a0a] mb-[40px]">
        Terms of Use
      </h1>
      <div className="flex flex-col  items-center lg:items-start justify-center mt-[50px]  gap-[50px] w-[380px] lg:w-[994px] pl-[24px] pr-[16px]">
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">1. INTRODUCTION</h1>
          <p className="leading-[30px] font-regular">
            1.1. The Monzone Site Terms of Use describe when and the conditions
            under which you are allowed to access or use the Site (defined in
            Section 10 below). Please read these Site Terms of Use carefully
            before visiting our Site. Some visitors to our Site simply visit the
            publicly available portions of our Site (“you” or “Site Visitors”).
          </p>
          <p className="leading-[30px] font-regular">
            1.2. All reference to “you or “your,” as applicable, mean a user
            and/or the Person who accesses, uses and/or participates in Platform
            in any manner, and such Person's heirs, assigns, and successors. If
            you use Platform on behalf of an entity, “you” or “your,” as
            applicable, means that entity and its affiliates and their
            respective directors, officers, employees, and agents.
          </p>
          <p className="leading-[30px] font-regular">
            1.3. If you do not agree to these Site Terms of Use, you may not
            visit, use, or access the Site or Site Services as a Site Visitor,
            User or otherwise and may not click to accept the Terms of Service
            when prompted on the Site.
          </p>
          <p className="leading-[30px] font-regular">
            1.4. By using or accessing or using website you indicate your
            acceptance of the following terms on your own behalf and on behalf
            of any organization you represent. If you do not agree to these
            terms (or any updates to or modified versions thereof), you should
            discontinue use of platform immediately. You also understand and
            accept that by using this platform/ website (as may be applicable)
            you are agreeing to membership of monzone multi- purpose cooperative
            society. If you do not agree to these terms, please do not proceed
            in using the payment channel.
          </p>
          <p className="leading-[30px] font-regular">
            1.5. Your use of Platform is governed by the version of the Terms in
            effect on the date Platform is accessed by you. Monzone may modify
            these Terms at any time and without prior notice. You should review
            the most current version of these Terms by visiting Platform and
            clicking on the Terms and Conditions hyperlink.
          </p>
          <p className="leading-[30px] font-regular">
            1.6. The Platform may offer you the option to enter into
            relationships and agreements with Third-Party Providers for access
            to additional services, such as, for example, to purchase and sell
            publicly traded securities on stock exchanges in various
            jurisdictions. As a condition to having access to those Third-Party
            Provider services, you may be required to enter into various
            agreements with a Third-Party Provider such as, for example, any
            customer, service or account agreements.
          </p>
          <p className="leading-[30px] font-regular">
            1.7. You must be at least 18 years of age to become a user of
            Company. You represent and warrant that you are 18 years of age or
            older and are fully able and competent to enter into, and abide by,
            the contract created by these Terms of Use. The Content and the
            Service are intended for Nigerian residents presently accessing the
            Service from within Nigeria. The Content and the Service shall not
            be considered a solicitation to any person in any jurisdiction where
            such solicitation would be illegal.
          </p>
          <p className="leading-[30px] font-regular">
            1.8. In order to access or use some of the features on Platform, you
            will be required to log-in to and create an account (your “Account”)
            at https://www.monzonecredit.com/ or the Monzone website. Platform'
            practices governing any resulting collection and use of your
            personal information are disclosed in our Privacy Notice which can
            be found here https://bit.ly/monzonecreditprivacypolicy. You will
            select your own password at the time of registration (or we may send
            you an e-mail notification with a randomly generated initial
            password) and you agree that:
          </p>
          <p className="leading-[30px] font-regular">
            1.8. In order to access or use some of the features on Platform, you
            will be required to log-in to and create an account (your “Account”)
            at https://www.monzonecredit.com/ or the Monzone website. Platform'
            practices governing any resulting collection and use of your
            personal information are disclosed in our Privacy Notice which can
            be found here https://bit.ly/monzonecreditprivacypolicy. You will
            select your own password at the time of registration (or we may send
            you an e-mail notification with a randomly generated initial
            password) and you agree that:
          </p>
          <p className="leading-[30px] font-regular">
            1.8.2. You will not use a username (or e-mail address) that is
            already being used by someone else, that infringes the intellectual
            property or other right of any person or entity, or is offensive;
          </p>
          <p className="leading-[30px] font-regular">
            1.8.3. You will provide true, accurate, current, and complete
            registration information about yourself in connection with the
            registration process;
          </p>
          <p className="leading-[30px] font-regular">
            1.8.4. You are solely responsible for all activities that occur
            under your Account, password, and username;
          </p>
          <p className="leading-[30px] font-regular">
            1.8.5. You are solely responsible for maintaining the
            confidentiality of your password and for restricting access to your
            mobile device so that others may not access any password protected
            portion of Platform using your name, username, or password;
          </p>
          <p className="leading-[30px] font-regular">
            1.8.6. Certain parts of Platform are protected by passwords or
            require a login. You may not obtain or attempt to obtain
            unauthorized access to such parts of Platform, or to any other
            protected materials or information, through any means not
            intentionally made available by Company for your specific use;
          </p>
          <p className="leading-[30px] font-regular">
            1.8.7. You will immediately notify us of any unauthorized use of
            your Account, password, or username, or any other breach of
            security; and
          </p>
          <p className="leading-[30px] font-regular">
            1.8.8. You will not sell, transfer, or assign your account or any
            Account rights.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">
            2. LICENSES AND THIRD-PARTY CONTENT
          </h1>
          <p className="leading-[30px] font-regular">
            2.1. MONZONE'S PROVISION OF THE SITE AND LIMITED SITE LICENSE
            Section 2.1 discusses the rights we give to you to allow you to use
            the Site, as detailed below: 2.1.1. As we describe in this Section
            2.1, Monzone grants you a personal, worldwide, royalty-free,
            non-assignable and non-exclusive right to use the Platform provided
            to you as part of the services provided by the Company. The license
            is granted to you for the sole purpose of enjoying the benefit of
            the services provided on the Platform, in the manner permitted by
            these Terms. This license is subject to and conditioned on
            compliance with the Site Terms of Use and, to the extent applicable,
            the rest of the Terms of Service.
          </p>
          <p className="leading-[30px] font-regular">
            2.1.2. We try to keep our Site and the Site Services safe, secure,
            and functioning properly, but we cannot guarantee the continuous
            operation of or access to our Services. In fact, we might even stop
            providing the Site or Site Services completely or stop providing
            certain features without notice.
          </p>
          <p className="leading-[30px] font-regular">
            2.1.3. The services provided via the Platform are protected by
            copyright, trademark, and other laws of both Nigeria and other
            relevant laws. Nothing in this Terms shall give you the right to use
            the Company's name or any of its trademark, logos, domain names, and
            other distinctive brand features for profit or non-profit cause. All
            right title, and interest in and to the Platform are and will remain
            the exclusive property of the Company. Feedback, comments, or
            suggestions provided by you are voluntary and implementation is
            effected at the sole discretion of the Company without any
            obligation to you.
          </p>
          <p className="leading-[30px] font-regular">
            2.2. TERMINATION OF THE LIMITED SITE LICENSE Section 2.2 explains
            that we can stop allowing you to use the Site, as detailed below:
          </p>
          <p className="leading-[30px] font-regular">
            2.2.1. Monzone may terminate any license it has granted to any Site
            Visitor or User to access the Site and Site Services by providing
            notice, and the termination of such license shall be effective
            immediately upon Monzone providing such notice.
          </p>
          <p className="leading-[30px] font-regular">
            2.2.2. If any information that you provide, or if we have reasonable
            grounds to suspect that any information that you provide, is false,
            inaccurate, outdated, incomplete, or violates these Terms or any
            applicable law, then we may suspend or terminate your account. We
            also reserve the more general and broad right to terminate your
            account or suspend or otherwise deny you access to it or its
            benefits – all in our sole discretion, for any reason, with or
            without advance notice and without liability. The Terms and any
            other documents, policies or agreements referenced or incorporated
            herein will continue to apply until terminated by either you or
            Company. If you choose to terminate your use of Platform, you may do
            so by contacting us by email or through account on the Monzone
            website. Once your use of Platform is terminated, your ability to
            log in will be immediately deactivated. If you terminate your use of
            Platform, you will remain obligated to pay any outstanding fees,
            such as any commissions, if any, relating to your use of Platform or
            a result of any other agreements that you may have with Company or
            its Affiliates. If you have any questions or trouble terminating the
            use of Platform, you can contact us by email at
            hello@monzonecredit.com. Company may continue to maintain
            information about a customer after their use of Platform is
            terminated only to the extent necessary to comply with applicable
            laws and to further legitimate business needs.
          </p>
          <p className="leading-[30px] font-regular">
            2.3. MONZONE'S INTELLECTUAL PROPERTY Section 2.3 explains that even
            though we let you use the Site, we still retain all our rights, as
            detailed below: Platform may include or make available certain
            content (the “Content”), which includes, without limitation:
          </p>
          <p className="leading-[30px] font-regular">
            2.3.1. account positions, balances, transactions, confirmations, and
            order history;
          </p>
          <p className="leading-[30px] font-regular">
            2.3.2. general news and information, commentary, educational
            material and information and data concerning the financial markets,
            securities and other subjects;
          </p>
          <p className="leading-[30px] font-regular">
            2.3.3. market data such as quotations for securities transactions
            and/or last sale information for completed securities transactions
            reported in accordance with federal securities regulations;
          </p>
          <p className="leading-[30px] font-regular">
            2.3.4. tax preparation, bill payment and account management tools;
          </p>
          <p className="leading-[30px] font-regular">
            2.3.5. Company names, logos, product and service names, trade names,
            trademarks and services marks (collectively, “Marks”) owned by
            Company, and Marks owned by Third-Party Providers (defined below);
            and
          </p>
          <p className="leading-[30px] font-regular">
            2.3.6. any other information, content, services, or software,
            including that which is accessible through the Monzone Platform.
          </p>
          <p className="leading-[30px] font-regular">
            Certain Content is supplied, distributed, provided or delivered by a
            Third-Party Provider (the “Third-Party Content”) such as
            information, services or software, made available by, through or on
            the Platform, social media websites, blogs, wikis, online
            conferences, telecasts, podcasts, and other forums (collectively,
            the “Forums”). Third-Party Content may be available through framed
            areas or through hyperlinks to the Third-Party Providers' websites.
          </p>
          <p className="leading-[30px] font-regular">
            Monzone and our licensors retain all right, title, and interest in
            and to all Intellectual Property Rights related in and to the Site
            and the Site Services. The Monzone logos and names are trademarks of
            Monzone and are registered in certain jurisdictions. All other
            product names, company names, marks, logos, and symbols on the Site
            or Site Services may be the trademarks of their respective owners.
            Nothing in the Terms of Service grants you a right to use any
            Monzone Marks.
          </p>
          <p className="leading-[30px] font-regular">
            2.4. YOUR INTELLECTUAL PROPERTY
          </p>
          <p className="leading-[30px] font-regular">
            2.4.1. YOUR RIGHTS AND LICENSE TO MONZONE AND OTHER SITE VISITORS
            Section 2.4.1 explains that by posting content on the Site, you give
            others certain limited rights to that content, as detailed below:
            You retain all ownership rights in any User Content you post on
            Monzone. To the extent permitted by applicable law, you also grant
            to Monzone and our successors and Affiliates a royalty-free,
            sub-licensable, transferable, perpetual, irrevocable, non-exclusive,
            worldwide license to use, reproduce, modify, publish, list
            information regarding, edit, translate, distribute, publicly
            perform, publicly display, and make derivative works of all such
            User Content and your name, voice, and/or likeness as contained in
            your User Content, in whole or in part, and in any form, media, or
            technology, whether now known or hereafter developed, for use in
            connection with the Site and Monzone's, our successors' and
            Affiliates' businesses, including, without limitation, for promoting
            and redistributing part or all of the Site (and derivative works
            thereof) in any media formats and through any media channels. You
            also hereby grant each User and each Site Visitor a non-exclusive
            license to access your User Content through the Site and to use,
            reproduce, distribute, and display such User Content to the extent
            permitted through the normal functionality of the Site and subject
            to all applicable confidentiality and other provisions of the Terms
            of Service, our Privacy Policy, and applicable law.
          </p>
          <p className="leading-[30px] font-regular">
            2.4.2. YOUR COMMENTS AND IDEAS
          </p>
          <p className="leading-[30px] font-regular">
            Section 2.4.2 explains when you can and what happens if you send
            your ideas to Monzone, as detailed below:
          </p>
          <p className="leading-[30px] font-regular">
            You may submit comments or ideas about the Site and Site Services,
            including without limitation about how to improve the Site or Site
            Services (collectively, “Ideas”). By submitting any Ideas, you agree
            that: (a) your disclosure is voluntary, gratuitous, unsolicited, and
            without restriction and will not place Monzone under any fiduciary
            or other obligation, (b) your Ideas do not contain the confidential
            or proprietary information of third parties, and (c) you grant us a
            perpetual and royalty-free license to use the Ideas without any
            additional compensation to you and to disclose the Ideas on a
            non-confidential basis or otherwise to anyone. You further
            acknowledge and agree that, by acceptance of your submission,
            Monzone does not waive any rights to use similar or related ideas,
            including those known or developed by Monzone or obtained from
            sources other than you.
          </p>
          <p className="leading-[30px] font-regular">
            2.5. THIRD-PARTY INTELLECTUAL PROPERTY.
          </p>
          <p className="leading-[30px] font-regular">
            Section 2.5 explains that third parties, including other Users, are
            responsible for content posted or linked on the Site, as detailed
            below: Any information or content expressed or made available by a
            third party or any other Site Visitor or User is that of the
            respective author(s) or distributor(s) and not of Monzone. Monzone
            neither endorses nor is responsible for the accuracy or reliability
            of any opinion, advice, information, or statement made on the Site
            by anyone other than Monzone's authorized agents acting in their
            official capacities. The Site may contain links to third-party
            websites. The Site may also contain applications that allow you to
            access third-party websites via the Site. Such thirdparty websites
            or applications are owned and operated by the third parties and/or
            their licensors. The inclusion of any link or application on the
            Site does not imply that we endorse the linked site or application.
            You use the links and third-party websites at your own risk and
            agree that your use of an application or third-party website
            accessed via the Site is on an “as is” and “as available” basis
            without any warranty for any purpose.
          </p>
          <p className="leading-[30px] font-regular">
            2.6. COMPLAINTS ABOUT COPYRIGHTED CONTENT ON THE SITE
          </p>
          <p className="leading-[30px] font-regular">
            Section 2.6 explains what to do if you think content on the Site
            infringes your rights, as detailed below: Monzone is committed to
            complying with Nigerian copyright and related laws and requires all
            Site Visitors and Users to comply with these laws. Accordingly, you
            may not use the Site to store any material or content, or
            disseminate any material or content, in any manner that constitutes
            an infringement of third-party intellectual property rights,
            including rights granted by Nigerian copyright law. If you are the
            owner of any copyrighted work and believe your rights under Nigerian
            copyright law have been infringed by any material on the Site, you
            may let us know by email at hello@monzonecredit.com for appropriate
            redress.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">3. PERMITTED SITE USES</h1>
          <p className="leading-[30px] font-regular">
            Section 3 explains how you are allowed to use the Site, as detailed
            below: Monzone offers the Site and Site Services for our business
            purposes only and not for personal, household, or consumer use.
            While we try to ensure that any information, we post is both timely
            and accurate, errors may appear from time to time. We do not make
            any representations or warranties with respect to any information
            that is posted on the Site by us or anyone else. In no event should
            any content be relied on or construed as tax or legal advice or
            otherwise. You should independently verify the accuracy of any
            content.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">4. PROHIBITED SITE USES</h1>
          <p className="leading-[30px] font-regular">
            Section 4 explains uses of the Site that are not allowed, as
            detailed below: You may not use, or encourage, promote, facilitate,
            instruct, or induce others to use, the Site or Site Services for any
            activities that violate any law, statute, ordinance or regulation;
            for any other illegal or fraudulent purpose or any purpose that is
            harmful to others; or to transmit, store, display, distribute or
            otherwise make available content that is illegal, fraudulent or
            harmful to others.
          </p>
          <p className="leading-[30px] font-regular">
            4.1. EXAMPLES OF PROHIBITED USES OF THE SITE
          </p>
          <p className="leading-[30px] font-regular">
            The following are examples of uses that are prohibited on the Site
            or when using the Site Services:
          </p>
          <p className="leading-[30px] font-regular">
            4.1.1. Seeking, offering, promoting, or endorsing and services,
            content, or activities that:
          </p>
          <p className="leading-[30px] font-regular">
            a. are defamatory, illegal, profane, vulgar, threatening, unlawfully
            discriminatory, illegal, pornographic, obscene, or sexually explicit
            in nature;
          </p>
          <p className="leading-[30px] font-regular">
            b. would violate the intellectual property rights, such as and
            including copyrights, of another person, entity, service, product,
            or website;
          </p>
          <p className="leading-[30px] font-regular">
            c. would violate (a) Monzone's Terms of Service, (b) the terms of
            service of another website or any similar contractual obligations,
            or (c) the policies of any financial institution;
          </p>
          <p className="leading-[30px] font-regular">
            d. are harassing toward another person based on the person's
            inclusion in a protected class as defined by applicable law;
          </p>
          <p className="leading-[30px] font-regular">
            4.1.2. Fraudulent or misleading uses or content, including:
          </p>
          <p className="leading-[30px] font-regular">
            a. misrepresenting your information, including by representing
            another person's profile, or parts of another person's profile, as
            your own;
          </p>
          <p className="leading-[30px] font-regular">
            b. using a profile photo that misrepresents your identity or
            represents you as someone else;
          </p>
          <p className="leading-[30px] font-regular">
            c. impersonating any person or entity, including, but not limited
            to, a Monzone representative, or falsely stating or otherwise
            misrepresenting your affiliation with a person or entity;
          </p>
          <p className="leading-[30px] font-regular">
            d. falsely attributing statements to any Monzone representative;
            falsely stating or implying a relationship with Monzone or with
            another company with whom you do not have a relationship;
          </p>
          <p className="leading-[30px] font-regular">
            c. would violate (a) Monzone's Terms of Service, (b) the terms of
            service of another website or any similar contractual obligations,
            or (c) the policies of any financial institution;
          </p>
          <p className="leading-[30px] font-regular">
            e. allowing another person to use your account, which is misleading
            to other Users;
          </p>
          <p className="leading-[30px] font-regular">
            4.1.3. Posting identifying information concerning another person;
          </p>
          <p className="leading-[30px] font-regular">
            4.1.4. Interfering or attempting to interfere with the proper
            operation of the Site or Site Services or any activities conducted
            on the Site, including by:
          </p>
          <p className="leading-[30px] font-regular">
            a. bypassing any measures, we may use to prevent or restrict access
            to the Site or any subparts of the Site, including, without
            limitation, features that prevent or restrict use or copying of any
            content or enforce limitations on use of the Site or the content
            therein;
          </p>
          <p className="leading-[30px] font-regular">
            b. attempting to interfere with or compromise the system integrity
            or security or decipher any transmissions to or from the servers
            running the Site;
          </p>
          <p className="leading-[30px] font-regular">
            c. using any robot, spider, scraper, or other automated means to
            access the Site for any purpose without our express written
            permission;
          </p>
          <p className="leading-[30px] font-regular">
            d. attempting to or interfering with or compromising the system
            integrity or security or deciphering any transmissions to or from
            the servers running the Site;
          </p>
          <p className="leading-[30px] font-regular">
            e. collecting or harvesting any personally identifiable information,
            including Account names, from the Site;
          </p>
          <p className="leading-[30px] font-regular">
            f. attempting to or imposing an unreasonable or disproportionately
            large load (as determined in Monzone's sole discretion) on the
            Site's infrastructure; Introducing any invalid data, virus, worm, or
            other harmful or malicious software code, agent, hidden procedure,
            routine, or mechanism through or to the Site that is designed to or
            known to cause to cease functioning, disrupt, disable, harm, or
            otherwise impair in any manner, including aesthetic disruptions or
            distortions, the operation of (or to allow you or any other person
            to access or damage or corrupt data, storage media, programs,
            equipment, or communications or otherwise interfere with operations
            of or on) the Site or any software, firmware, hardware, computer
            system, or network of Monzone or any third party;
          </p>
          <p className="leading-[30px] font-regular">
            g. accessing or attempting to access the Site or Site Services by
            any means or technology other than the interface provided; or
          </p>
          <p className="leading-[30px] font-regular">
            h. framing or linking to the Site or Site Services except as
            permitted in writing by Monzone;
          </p>
          <p className="leading-[30px] font-regular">
            4.1.5. Conduct or actions that could jeopardize the integrity of or
            circumvent the Site, Site Services or Monzone's proprietary
            information, including:
          </p>
          <p className="leading-[30px] font-regular">
            a. attempting to or actually reverse engineering, modifying,
            adapting, translating, preparing derivative works from, decompiling,
            interfering with the operation of, or otherwise attempting to derive
            source code from any part of the Site or Site Services unless
            expressly permitted by applicable law or Monzone; or
          </p>
          <p className="leading-[30px] font-regular">
            b. accessing or using the Site or Site Services to build a similar
            service or application, identify or solicit Monzone Users, or
            publish any performance or any benchmark test or analysis relating
            to the Site.
          </p>
          <p className="leading-[30px] font-regular">4.2. ENFORCEMENT</p>
          <p className="leading-[30px] font-regular">
            We reserve the right, but do not assume the obligation, to
            investigate any potential violation of this Section 4 or any other
            potential violation of these Site Terms of Use and to remove,
            disable access to, or modify any content on the Site. Our failure to
            act with respect to a breach by you or others does not waive our
            right to act with respect to subsequent or similar breaches. We do
            not guarantee we will take action against all breaches of these
            Terms of Use or the User Agreement.
          </p>
          <p className="leading-[30px] font-regular">
            4.3. REPORTING AND CORRECTING VIOLATIONS
          </p>
          <p className="leading-[30px] font-regular">
            If you become aware of any violation of these Site Terms or Use, you
            must immediately report it to our Customer Service. You agree to
            assist us with any investigation we undertake and to take any
            remedial steps we require in order to correct a violation of these
            Site Terms of Use.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">5. THIRD PARTY WEBSITES</h1>
          <p className="leading-[30px] font-regular">
            Section 5 explains how third party websites may be accessed on our
            platform.
          </p>
          <p className="leading-[30px] font-regular">
            5.1. You may not frame, link or deep-link this Website to any other
            website or website without our prior written consent. Should You
            wish to frame or to set up a link / deep-link to this Website please
            contact Monzone/its Affiliate via hello@monzonecredit.com. Without
            prejudice to any of its rights, Monzone/its Affiliates may upon
            discovering such unauthorised framing, linking or deep-linking
            disable them.
          </p>
          <p className="leading-[30px] font-regular">
            5.2. If the Website provides links to Websites or websites and
            access to content, product and services from third parties,
            including users, advertisers, affiliates and sponsor of the Website
            or website, You agree that Monzone/its Affiliates are not
            responsible for the availability of, and content provided on third
            party Websites, websites or content. You are required to peruse the
            policies posted by other websites regarding privacy and other topics
            before use. Monzone/its Affiliates are not responsible for third
            party content accessible through the Website, including opinions,
            advice, statements and advertisements, and You shall bear all risks
            associated with the use of such content. Monzone/its Affiliates are
            not responsible for any loss or damage of any sort which You may
            incur from dealing with any third party. When You access such links
            please understand that they are independent from Monzone and its
            Affiliates.
          </p>
          <p className="leading-[30px] font-regular">
            5.3. By using any third-party content, You may leave the Website and
            be directed to an external website or website, or to a website or
            website maintained by an entity other than Monzone/its Affiliates.
            If You decide to visit any such site, You do so at your own risk and
            it is your responsibility to take all protective measures to guard
            against viruses or any other destructive elements. Monzone/its
            Affiliates make no warranty or representation regarding, and does
            not endorse, any linked web sites or the information appearing
            thereon or any of the products or services described thereon. Links
            do not imply that Monzone/its Affiliates or the Website sponsors,
            endorses, is affiliated or associated with, or is legally authorized
            to use any trademark, trade name, logo or copyright symbol displayed
            in or accessible through the links, or that any linked site is
            authorized to use any trademark, trade name, logo or copyright
            symbol of Monzone or any of its Affiliates or subsidiaries.
          </p>
          <p className="leading-[30px] font-regular">
            5.4. You hereby expressly acknowledge and agree that the linked
            sites are not under the control of Monzone/its Affiliates and
            Monzone/its Affiliates are not responsible for the contents of any
            linked site or any link contained in a linked site, or any changes
            or updates to such sites. Monzone/its Affiliates are not responsible
            for the accuracy or quality of any such contents. Monzone/its
            Affiliates are not responsible for webcasting or any other form of
            transmission received from any linked site. Monzone/its Affiliates
            are providing these links to You only as a convenience, and the
            inclusion of any link shall not be construed to imply endorsement by
            Monzone/its Affiliates in any manner of the Website.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">6. ACCOUNT SECURITY</h1>
          <p className="leading-[30px] font-regular">
            Section 6 explains your responsibility to ensure the safety of your
            account with Monzone.
          </p>
          <p className="leading-[30px] font-regular">
            6.1. You are responsible for ensuring the safety of your Account.
          </p>
          <p className="leading-[30px] font-regular">
            6.2. We recommend that you use appropriate, up-to-date security
            software and definitions to reduce the risk that your system will be
            susceptible to unauthorised access and intrusion.
          </p>
          <p className="leading-[30px] font-regular">
            6.3. You agree that neither Company nor any of our group companies,
            directors, staff, agents, suppliers or contractors will have any
            liability, of whatever nature and howsoever arising, for any Loss
            arising as a result of your failure to keep your Company Account
            (including login and password details) secure, or from any
            unauthorised access to your Company Account as a result of malicious
            code (such as viruses or Trojans) or your failure to update to the
            latest version.
          </p>
          <p className="leading-[30px] font-regular">
            6.4. We will take reasonable steps consistent with our legal duties
            to protect your Company Account and secure it, however we are not
            liable for security breaches that may occur where we have complied
            with those obligations
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">8. COOKIES</h1>
          <p className="leading-[30px] font-regular">
            Section 8 provides information on the type of technical and
            navigational information the Company may collect from you in the
            course of using the Company's service. When you use the Service,
            Company may collect technical and navigational information, such as
            computer browser type, IP address, pages visited, and average length
            of time spent on our sites. We may also record the time of actions
            taken on the sites for regulatory or other control purposes. This is
            accomplished through the use of cookies. We use cookies to allow you
            to avoid having to re-enter information and to aid in navigation
            between pages of the Service; help us recognize you as a unique user
            when you return to the Service; remember what kinds of information
            you have shown interest in while on the Service; and collect and
            compile anonymous, aggregated information for statistical and
            evaluation purposes. No personal information is stored in the
            cookies. You may be able to disable cookies by changing your browser
            settings, but the Service' functionality and your experience may be
            diminished as a result. . Kindly visit our website
            www.monzonecredit.com to download. It explains what cookies we use
            on our Platform, why we use them, and how you can control them.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">9. SITE AVAILABILITY</h1>
          <p className="leading-[30px] font-regular">
            9.1. We reserve the right to make changes to any part of the
            Website, suspend or terminate the operation of the Website at any
            time for the purposes of support and maintenance or to update the
            information contained on the Website and the Information or these
            Terms and Conditions in order to improve or streamline the services
            which it offers
          </p>
          <p className="leading-[30px] font-regular">
            9.2. While we have put resources into building and testing our
            computer systems, computer glitches, slowdowns, and crashes will
            occur. We will also need to restrict access to some parts of our
            website or our entire website to perform routine maintenance. We
            will try to schedule our maintenance during the middle of the night.
          </p>
          <p className="leading-[30px] font-regular">
            9.3. While it is our intention that our website will be available
            seven days a week except when maintenance is scheduled (usually for
            weekends), you understand that we do not guarantee that you will
            always be able to access Platform. Computer problems can arise on
            your end, our end, or anywhere in between: your computer may break
            down; the connection between your computer and your Internet service
            provider may not work properly; your Internet service provider may
            go down; or our computers and the computers we link to may be
            unavailable due to unforeseen system outages.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">
            10. NETWORK SECURITY AND RELIABILITY
          </h1>
          <p className="leading-[30px] font-regular">
            Section 10 requires you to take security measures to protect your
            account from unauthorised third-party access.
          </p>
          <p className="leading-[30px] font-regular">
            You acknowledge that the Internet is not a secure network and that
            communications transmitted over the Internet may be accessed by
            unauthorized or unintended third parties. E-mail notifications sent
            by Company will not contain sensitive or confidential information.
            Due to security risks, you should not send any sensitive
            information, such as account numbers or passwords in an unencrypted
            e-mail. E-mails may fail to transmit properly. Regardless of whether
            you receive an e-mail notification, you agree to check Company
            website to avoid missing time-sensitive information. You further
            agree that for your records, you can download and save or print the
            communications received via electronic delivery.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">
            11. ASSIGNMENT AND SEVERABILITY
          </h1>
          <p className="leading-[30px] font-regular">
            Each of the provisions of these terms and conditions is severable
            and distinct from the others. If at any time one or more of such
            provisions is or becomes illegal, invalid or unenforceability of the
            remaining provisions shall not be affected in any way. Monzone
            and/or its Affiliates may assign their/its obligations and rights
            under this Terms and Conditions to an Affiliate or a successor
            entity and your Personal Information as well as the use and
            processing of such Personal Information may be among the assets
            transferred by Monzone and/or its Affiliates. By Registering on this
            Website, you acknowledge and consent that such transfers may occur
            and are permitted by these Terms and Conditions.
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">12. THIRD PARTY ADVERTISING</h1>
          <p className="leading-[30px] font-regular">
            Monzone/its Affiliates allow third parties to place advertisements
            on the Website. Third party advertisements are clearly labeled as
            such and may be chargeable. Monzone/its Affiliates do not endorse
            and are not responsible for the content of any third party
            advertisement on the website or otherwise. 13. LIABILITIES AND
            EXCLUSION OF LIABILITIES
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <p className="leading-[30px] font-regular">
            13.1. Monzone/its Affiliates shall not be liable to you for any loss
            or damage You may suffer or incur as a result of your use of the
            Website unless such a loss or damage results directly from the fraud
            or willful default of Monzone/its Affiliates.
          </p>
          <p className="leading-[30px] font-regular">
            13.2. In the event that you do not comply with any provision of
            these Terms and Conditions and such non-compliance results in any
            loss or damage to Monzone/its Affiliates, You agree and undertake to
            compensate Monzone/its Affiliates for such loss and/or damage.
          </p>
          <p className="leading-[30px] font-regular">
            13.3. Any limitation or exclusion of liability under these Terms and
            Conditions shall only be valid to the full extent permitted by law.
          </p>
          <p className="leading-[30px] font-regular">
            13.4. Monzone/its Affiliates is entitled, at its sole discretion, to
            take such steps as it may consider expedient, including any steps
            required to comply with any law, regulation, order, directive,
            notice or request from any government or regulatory authority
            (whether or not having the force of law).
          </p>
          <p className="leading-[30px] font-regular">
            13.5. To the full extent permitted by law, Monzone/its Affiliates
            shall not, in connection with the provision of the website, be
            liable for any loss, damage or expense suffered by You or any third
            party by virtue of any delay in acting on any instruction or any
            partial completion of or failure or inability to act on any of your
            instructions for whatever reason (including, without limitation, any
            failure or error of any computer or electronic system or equipment).
          </p>
          <p className="leading-[30px] font-regular">
            13.6. In no event will Monzone/its Affiliates or its third party
            providers be liable for any damages, including without limitation
            direct or indirect, special, incidental, punitive, or consequential
            damages, losses or expenses arising out of or relating to your use
            of this Website, any failure of performance, malfunction, fault in
            delivery, suspension, inaccuracy, termination, error, omission,
            interruption, defect, delay in operation or transmission, computer
            virus, line or system failure, unauthorized interception of
            information, unauthorized access or use or other security threats
            relating to the Website or any other cause in connection with the
            performance, operation, maintenance, use of or inability to use all
            or any part of the Website, even if Monzone/its Affiliates or their
            agents or advisors are advised of the possibility of such damages,
            losses or expenses (past performance is no guarantee of future
            results).
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[16px] font-bold">14. DEFINITIONS</h1>
          <p className="leading-[30px] font-regular">
            Section 10 gives you some definitions of capitalized terms that
            appear in the Site
          </p>
          <p className="leading-[30px] font-regular">
            Terms of Use but other capitalized terms are defined above or in the
            User Agreement, which you can tell because the term is put in
            quotation marks and bold font. Capitalized terms not defined below
            have the meanings described in the Terms of Service. “Affiliate”
            means any entity that, directly or indirectly, through one or more
            intermediaries, controls, is controlled by, or is under common
            control with Monzone. “Monzone Mobile Application” means the mobile
            application published by Monzone or our Affiliates for access to or
            use of the Site or any Site Services.
          </p>
          <p className="leading-[30px] font-regular">
            “Data Subject” means an identifiable person. One who can be
            identified directly or indirectly by reference to an identification
            number or to specific information provided by him or her in
            accordance with the provisions of these Terms and Conditions.
            “Intellectual Property Rights” means all patent rights, copyright
            rights, mask work rights, moral rights, rights of publicity,
            trademark, trade dress and service mark rights, goodwill, trade
            secret rights and other intellectual property rights as may now
            exist or hereafter come into existence, and all applications
            therefore and registrations, renewals and extensions thereof, under
            the laws of any state, country, territory or other jurisdiction.
            “Personal Information” means the data relating to a Data Subject
            which is collect to enable you to use the Website; “Public Site
            Services” means, collectively, all services, applications and
            products that are accessible by any Site Visitor who has not become
            a User through the Site, to the extent they are accessible by a Site
            Visitor who has not become a User. "Site" means, collectively, our
            website located at www.monzonecredit.com, all affiliated websites
            and applications, including mobile websites and Monzone Mobile
            Application, owned and operated by us, our predecessors or
            successors in interest, or our Affiliates. “Site Services” means,
            collectively, all services, applications and products that are
            accessible through the Site, including the Public Site Services, and
            all Monzone Mobile Applications. “Terms and Conditions” means the
            terms and conditions contained within this electronic document you
            are reading now; “User Content” means any comments, remarks, data,
            feedback, content, text, photographs, images, video, music, or other
            information that you or any Site Visitor or User post to any part of
            the Site or provide to Monzone, including such information that is
            posted as a result of questions. “You” means any person who accesses
            our Site, including a Site Visitor or User and including any entity
            or agency on whose behalf any such person accesses or uses our Site.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
