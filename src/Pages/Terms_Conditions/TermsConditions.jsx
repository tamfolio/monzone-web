import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

function TermsConditions() {
  const [page, setPages] = useState(0);

  const handleSelectChange = (event) => {
    setPages(parseInt(event.target.value));
  };

  const menuItems = [
    "Overview",
    "General",
    "Data that We Collect from You",
    "The Types of Data We May Request",
    "Information from Other Sources",
    "What we do with the Information We Collect from Users of the Platform",
    "Our Principles of Data Processing",
  ];
  return (
    <div className="flex flex-col items-center justify-start py-[50px]">
      <h1 className="text-[40px] lg:text-[100px] font-bold text-[#0a0a0a] mb-[40px]">
        Terms & Conditions
      </h1>
      <button className="w-[160px] h-[50px] bg-[#FDB813] font-bold rounded-[30px] ">
        Download PDF
      </button>
      <div className="flex flex-col lg:flex-row items-start justify-center mt-[50px] lg:gap-[150px] gap-[30px]">
        <div className="w-[280px] lg:flex flex-col gap-[50px] hidden">
          {menuItems.map((item, index) => (
            <p
              key={index}
              onClick={() => setPages(index)}
              className={`cursor-pointer py-2 px-3 ${
                page === index
                  ? "text-[#FDB813] border-l-4 border-[#FDB813]"
                  : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>
        <div>
          <FormGroup className="w-[386px]">
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              value={page}
              onChange={handleSelectChange}
            >
              {menuItems.map((item, index) => (
                <option key={index} value={index}>
                  {item}
                </option>
              ))}
            </Input>
          </FormGroup>
        </div>
        <div className="w-[380px] lg:w-[726px]">
          {page === 0 && (
            <p>
              Monzone Credit Limited (“Monzone”, “us”. “we”) is a limited
              liability company registered in Nigeria with its registered
              address at 4 Babatope Bejide Crescent, Lekki Phase 1, Lagos State.
              We provide a platform (the “Platform”) for providing financial
              services to our customers. The Platform is owned and operated by
              Monzone <br /> <br />
              Monzone is committed to protecting and respecting your privacy.
              Monzone takes all necessary steps to ensure that your personal
              data is safe and to prevent the misuse of your personal data.
              Detailed information on how we do it, as well as why and how we
              collect, store and use your personal data, could be found below.
              This Privacy Policy (“Privacy Policy”) applies to information we
              collect or use on our website www.monzonecredit.com and the
              Platform owned or controlled by Monzone, or its affiliated
              companies, which are entities that control or are controlled by or
              are under common control with us (“Affiliates”) (collectively, the
              “Company”) <br /> <br />
              The privacy policy does not apply to any products, services,
              websites, or content that are offered by third parties or have
              their own privacy policy. Please be aware that we are not
              responsible for the content or privacy practices of such other
              third-party websites or services. We encourage our users to be
              aware when they leave the Platform to read the privacy statements
              of any other site that collects personal information. When you use
              the Platform or its content, certain third parties may use
              automatic information collection technologies to collect
              information about you or your device.
              <br /> <br /> These third parties may include: <br /> <br />{" "}
              Advertisers, ad networks and ad servers <br /> <br /> Analytics
              companies
              <br /> <br /> Your mobile device manufacturer <br /> <br /> Your
              mobile service provider
              <br /> <br /> These third parties may use tracking technologies to
              collect information about you when you use the Platform. The
              information they collect may be associated with your personal
              information or they may collect information, including personal
              information, about your online activities over time and across
              different websites, apps and other online services websites. They
              may use this information to provide you with interest-based
              (behavioural) advertising or other targeted content. We do not
              control these third parties tracking technologies or how they may
              be used. If you have any questions about an advertisement or other
              targeted content, you should contact the responsible provider
              directly.
            </p>
          )}
          {page === 1 && (
            <p>
              Please read this privacy policy carefully as it sets out the basis
              on which we collect any personal information from you, or that you
              provide to us and how we use it in the operation of the Platform.
              <br /> <br />
              &bull; This privacy policy covers: Registered users of the
              Platform and guests on the Platform <br /> &bull; Any changes we
              may make to this privacy policy in the future will be posted on
              this page and, where appropriate, notified to you by email. Please
              check back frequently to see any updates or changes to our privacy
              policy. Your continued use of the Service after any change in this
              Privacy Policy will constitute your acceptance of the changes. The
              date the privacy policy was last revised is identified at the top
              of the page. You are responsible for ensuring we have an up-
              to-date active and deliverable e-mail address for you and for
              periodically visiting this privacy policy to check for any changes{" "}
              <br /> &bull;This Privacy Policy and our Terms of Service (the
              “Terms of Service”), which is incorporated herein by reference,
              are an agreement (collectively, this “Agreement”) between you
              (“You” or “your” or “you”), a user of the Service, and us. By
              using our website, you acknowledge and agree to this policy, and
              consent to our use of cookies in accordance with the terms of this
              Agreement.
            </p>
          )}
          {page === 2 && (
            <p>
              While on our website as a user or a guest, we may collect, store,
              and use the following kinds of personal information: <br />
              &bull; Information and contents, you provide; <br /> {"  "}&bull;
              Platform credentials; <br />
              &bull; Business Information <br /> &bull;information about your
              computer and your visits to and use of the Platform including your
              Internet Protocol (IP) address, geographical location, browser
              type and version, devise characteristics, operating system,
              language preferences, referral source, and information on action
              taken on the Site, such as; length of visit, page views and
              website navigation paths; information that you provide to us when
              registering with the Service including your email address; <br />{" "}
              &bull; information that you provide or that is collected by and
              from Facebook, Twitter, Instagram or other social media
              properties, whether existing now or in the future, when completing
              your profile on the Platform including your name, profile
              pictures, gender, date of birth, relationship status, interests
              and hobbies, educational details, employment details and other
              personal data or information; <br /> &bull; information that you
              provide to us to subscribe to our email notifications and/or
              newsletters or text message alerts, or participate in one of our
              online forums or communities including your name, postal address,
              email address, telephone and/or mobile numbers; <br /> &bull;
              information that you provide to us when using the Platform or that
              is generated in the course of the use of those services including
              the timing, frequency and pattern of service use;
              <br /> &bull; information relating to any use of our services on
              the Platform or any other transactions that you enter into through
              the Platform including your name, address, telephone number, email
              address, fax number, and credit card details; content that you
              submit to the Platform or via links to social media networks,
              forums, blogs, message boards, chat rooms or similar
              functionality, including audio recordings, software code, videos,
              photos, images, text, information (including, without limitation,
              personal information), user comments, and any other content
              (collectively, “User Content”); <br /> &bull;information contained
              in or relating to any communication with us or our third-party
              service providers for customer support or other communications,
              including, without limitation, records and copies of
              correspondence and responses to surveys for research purposes;{" "}
              <br /> &bull; information from and about the devices you use to
              access the Platform, including attributes such as the operating
              system, hardware version, device settings, file and software
              names, types, battery and signal strength, device identifiers,
              device locations, specific geographic locations (such as GPS,
              Bluetooth, WiFi signals), connection information such as the name
              of your mobile operator or ISP, browser type, language, time zone,
              mobile phone number and IP address; <br /> &bull;in connection
              with your visit or use of the Platform, we may automatically
              collect information about our users, such as the numbers and
              frequency of users and their characteristics and information about
              similar groups of users, certain age groups or users that live in
              a particular geographical area. This data is only used in the
              aggregate as a statistical measure and not in a manner that would
              identify you personally. Aggregate information generally is
              collected through the use of cookies and beacons; <br />{" "}
              &bull;when you access or use the Platform or any portion thereof,
              we may collect physical location information that is sufficiently
              precise to allow us to locate a specific person or device
              (“Location Information”). We only collect Location Information
              with your permission (e.g., such as when you agree to provide it
              to us after you initially access or use the Service). We may use
              Location Information to provide you with content and services that
              are relevant to a particular location, such as advertising, search
              results, and directions; <br /> &bull;The Platform may access
              metadata and other information associated with other files stored
              on your device. This may include, for example, photographs, audio
              and video clips, personal contacts and address book information;
              and <br /> &bull; any other personal information that you choose
              to send to us.
              <br /> &bull; We also collect and store data that you submit to us
              via email and through our contact form.
              <br /> &bull; We collect the information above by using cookies.
              Kindly visit our website www.monzonecredit.com to download. It
              explains what cookies we use on our Platform, why we use them, and
              how you can control them.
            </p>
          )}
          {page === 3 && (
            <p>
              We may request the underlisted information from you, and may from
              time to time, update our request: <br /> &bull;contact information
              – including your name, date of birth, address, postcode, and other
              contact information such as email address and telephone/mobile
              number and (where applicable) the contact details of your first of
              kin;
              <br /> &bull; the bank account details to receive and make
              payments on the Platform;
              <br /> &bull; your passwords and security question answers; <br />{" "}
              &bull;your financial interests, financial position, or loan
              repayment performance;
              <br /> &bull;answers to questions required by third party credit
              reference agencies for identification purposes; <br />{" "}
              &bull;information about your activities on the platform; and{" "}
              <br /> &bull; information from directors/individuals associated
              with you and/or your business. We may retain copies of the
              following information about you: <br /> &bull; any correspondence
              you send us, details of your registration history, and any
              materials you post on the Platform; <br /> &bull; passports or
              other identification evidence that you provide for anti-money
              laundering and anti-fraud purposes; <br /> &bull; records of any
              surveys that you may be asked to complete for research purposes,
              although you do not have to respond to them; <br /> &bull; details
              of transactions you carry out through the Platform and the receipt
              and disbursement of repayments;
              <br /> &bull; details of your visits to the Platform and the
              resources that you access; <br /> &bull;where explicit consent has
              been provided, information about your physical or mental health or
              condition (where necessary and appropriate); and <br /> &bull;
              where explicit consent has been provided, information relating to
              any criminal proceedings in which you have been involved. <br />
              If you give us false or inaccurate information, either directly or
              through an agent, and we suspect or identify fraud, we will record
              this <br /> <br />
              We may also be provided with information about you from
              third-party brokers, introducers, or other referrers, who obtained
              that information from you directly.
            </p>
          )}
          {page === 4 && (
            <p>
              In relation to borrowers only, we may also check information about
              you held on our own records and also obtain information from
              credit reference agencies about you and your financial associates’
              personal credit behavior and personal credit accounts. You consent
              that we are at liberty to obtain such information from any third
              party wherever it may be at no liability to us. We may also search
              fraud prevention agencies for information on you and your
              financial associates and business partners. <br /> <br /> These
              third parties may use tracking technologies to collect information
              about you when you use the Service. The information they collect
              may be associated with your personal information or they may
              collect information, including personal information, about your
              online activities over time and across different websites, apps
              and other online services websites. They may use this information
              to provide you with interest based (behavioral) advertising or
              other targeted content. We do not control these third parties'
              tracking technologies or how they may be used. If you have any
              questions about an advertisement or other targeted content, you
              should contact the responsible provider directly. <br /> <br /> We
              are not responsible for the practices employed by websites or
              services linked to or from the Platform, including the information
              or content contained therein. Please remember that when you use a
              link to go from the Service to another website, our Privacy Policy
              does not apply to third-party websites or services. Your browsing
              and interaction on any third-party website or service, including
              those that have a link or advertisement on our website, are
              subject to that third party’s own rules and policies. In addition,
              you acknowledge that we are not responsible for and we do not
              exercise control over any third parties that you authorize to
              access your User Content. If you are using a third-party website
              or service (like Facebook) and you allow such a third-party access
              to your user content you do so at your own risk. This privacy
              Policy does not apply to information we collect by other means
              (including offline) or from other sources other than through the
              Platform.
            </p>
          )}
          {page === 5 && (
            <p>
              The main reason we use this information is to provide you with
              details about our products and services. Where it is in our
              legitimate interest to do so, we (or third-party data processors,
              agents, and sub-contractors acting on our behalf, and you consent
              to our sharing of this information with third-party processors,
              agents, and sub-contractors) may also use the information: <br />{" "}
              <br /> &bull; to enrich your experience and interaction with the
              Website by allowing you to store your details so that your
              preferences are retained when you revisit the Platform; <br />{" "}
              &bull;to analyze site usage and improve our services; <br />{" "}
              &bull; to send transactional messages, including responding to
              your comments, questions, and requests; providing customer service
              and support; sending you technical notices, updates, security
              alerts, and support and administrative messages sending
              statements, invoices and payment reminders to you, and collecting
              payments from you; and, when we have location information, we use
              it to tailor our Service for you and others.
              <br /> &bull; to process, verify, and complete transactions, and
              send you related information, including purchase confirmations and
              invoices, to carry out our obligations and enforce our rights
              arising from any contracts entered into between you and us,
              including for billing, collection and enforcement, and to build a
              user database;
              <br /> &bull; monitor and analyze trends, usage, and activities in
              connection with the Platform and for marketing, advertising,
              administrative, analytical, research, optimization, and other
              purposes. For example, we may use statistical analyses of usage
              data in order to measure interest in the various areas of the
              Service, for development purposes and to inform advertisers and
              partners in aggregate and anonymous terms about consumers who
              click on their advertising or other messages. IP addresses are
              also used for systems administration and troubleshooting purposes
              <br /> &bull;to deliver administrative notices, alerts, and
              communications relevant to your use of the services;
              <br /> &bull; to contact you from time to time to inform you about
              new features, how to troubleshoot problems, and to protect you
              against fraud or other criminal activity;
              <br /> &bull; To verify your identity and assist you, in case you
              lose or forget your login/password details; <br /> &bull; For
              compliance with laws which impose upon Monzone the collection
              and/or further processing of certain kinds of Personal Data;
              <br /> &bull; To prevent and detect any misuse of the Website, or
              any fraudulent activities carried out through the Website
              (“Misuse/Fraud”);
              <br /> &bull; To verify compliance with the terms and conditions
              governing the use of the Platform.
            </p>
          )}
          {page === 6 && (
            <p>
              &bull;Personal data will be processed fairly, lawfully, and in a
              transparent manner; <br /> &bull;Personal data will be processed
              for a specific purpose and not in a way that is incompatible with
              the purpose which Monzone has collected it; <br /> &bull; Your
              personal data is adequate, relevant, and limited to what is
              necessary for the purposes for which it is processed;
              <br /> &bull; Your personal data will be kept accurate and, where
              necessary kept up to date; <br /> &bull;Your personal data will be
              kept for no longer than is necessary for the purposes for which it
              is processed;
              <br /> &bull; We will take appropriate steps to keep your personal
              data secure. Lawful Basis for Processing Your Data
              <br /> <br /> &bull;Consent When you give clear consent for us to
              process your personal data for a specific purpose or according to
              Section 8 of this Policy.
              <br /> &bull; Contract If the processing of your data is necessary
              for a contract you have with us, or because we have asked you to
              take specific steps before entering into that contract.
              <br /> &bull; Legal Obligation If the processing of your personal
              data is necessary where there is a statutory obligation upon us{" "}
              <br /> &bull; Legitimate interests Processing your data is
              necessary for our legitimate interests or the legitimate interests
              of a third party, provided those interests are not outweighed by
              your rights and interests. These legitimate interests are: <br />{" "}
              <br /> &bull; gaining insights from your behavior on our website
              or in our app ; b. delivering, developing, and improving Monzone
              service c. enabling us to enhance, customize or modify our
              services and communications d. determining whether marketing
              campaigns are effective e. enhancing data security In each case,
              these legitimate interests are only valid if they are not
              outweighed by your rights and interests, are not incompatible with
              other lawful basis for processing data under the Nigeria Data
              Protection Act 2023, and where you do not have a reasonable
              expectation that the data would be processed in the manner
              envisaged.
              <br /> &bull; Vital interests If processing your data is necessary
              to protect your vital interest or that of a third party <br />{" "}
              &bull; What Constitutes Consent? 1. We will not ask for your
              personal data unless we need it to provide services to you. At any
              point where consent is the appropriate lawful basis for processing
              your personal data, we will provide you the option to either
              accept or not. In addition, whenever we introduce new services and
              technologies, we will ensure you understand and agree to any new
              ways in which your information will be processed.
              <br /> &bull; You will be considered to have given your consent to
              Monzone for the processing of your personal data when;
              <br /> &bull; You complete any form issued by Monzone at any of
              our service points (mobile, online, in-branch, etc.) requesting
              such personal information; b. You register, check, or tick the
              acceptance box on any of our electronic platforms (Online or
              Mobile) relating to terms and conditions of any service or product
              offered; c. You use any service or product offered by Monzone; and
              d. Monzone intends to share your personal data for processing with
              any country that is not listed in the Whitelist of Countries as
              may be published by the Nigeria Data Protection Commission NDPC
              from time to time. <br /> &bull; If we ask for your personal
              information for a secondary reason, like marketing, we will either
              ask you directly for your expressed consent or provide you with an
              opportunity to say no.
              <br /> &bull; How do I withdraw my consent? If after you opt-in,
              you change your mind, you may withdraw your consent to the
              continued processing of your personal data, at any time, by
              contacting us at hello@monzonecredit.com
              <br /> &bull; We may share your information with analytics and
              search engine providers that assist us in the improvement and
              optimization of our site; b. Entities engaged in order to provide
              the Services (e.g., hosting providers or e-mail platform
              providers); c. We engage service providers to perform functions
              and provide services to us. We may share your private personal
              information with such service providers subject to obligations
              consistent with this Privacy Policy and any other appropriate
              confidentiality and security measures, and on the condition that
              the third parties use your private personal data only on our
              behalf and pursuant to our instructions; d. Persons authorized to
              perform technical maintenance (including maintenance of network
              equipment and electronic communications networks); e. Public
              entities, bodies or authorities to whom your Personal Data may be
              disclosed, in accordance with the applicable law or binding orders
              of those entities, bodies or authorities; <br /> &bull; Persons
              authorized by Monzone to process Personal Data needed to carry out
              activities strictly related to the provision of the Services, who
              have undertaken an obligation of confidentiality or are subject to
              an appropriate legal obligation of confidentiality (e.g.,
              employees of Monzone);
              <br /> &bull; We may share your personal information with
              companies and other third parties performing services on our
              behalf (for example KYC service providers, credit reference
              agencies, customer relationship management providers, or other
              service providers) who will only use the information to provide
              that service. We may also share your personal information with
              other members of our corporate group, or a purchaser or potential
              purchaser of our business;
              <br /> &bull; We may share alerts and information derived from
              identity verification checks with third parties for the purpose of
              anti-money laundering and fraud prevention; and
              <br /> &bull; We may include applications or widgets from social
              media networks that allow interaction or content sharing by their
              users. These widgets, such as a Facebook “Share” or “Like” button,
              are visible to you on the web page you visit. Integration between
              the Service and social media networks such as Facebook, Twitter
              and others may allow social media networks in which you
              participate to collect information about you, even when you do not
              explicitly activate the network’s application or widget. Please
              visit the applicable social media network’s privacy policy to
              better understand their data collection practices and choices they
              make available to you. The privacy policy of the social media
              network controls the collection, use and disclosure of all
              personal information transmitted to that network;
              <br /> &bull; We may disclose any information, including, without
              limitation, Personal Information that we deem necessary, in our
              sole discretion and without your prior permission, to comply with
              any applicable law, regulation, legal process or governmental
              request. We also may exchange information, including, without
              limitation, Personal Information, with other companies and
              organizations to protect the rights, property, or safety of the
              Company and its affiliates, personnel, users, third parties, or
              others. We reserve the right to disclose a user’s Personal
              Information if we believe, in good faith, that the user is in
              violation of the Terms of Service, even without a subpoena,
              warrant or other court order.
              <br /> &bull; Save as set out in this privacy policy , we will not
              sell or disclose your data to any third party. 3. By using our
              Platform, our services or product owned by us, you consent to us
              sharing your collected information with any third party as may be
              important and necessary for accessing this Platform or using any
              of our services and product
              <br /> &bull; Where We Store Your Personal Data We are committed
              to ensuring that your information is safe and take all steps
              reasonably necessary to ensure that your data is treated securely
              and in accordance with this privacy policy. In order to prevent
              unauthorized access or disclosure, we have put in place suitable
              physical, electronic, and managerial procedures to safeguard and
              secure the information we collect online.
              <br /> &bull; How Long We Keep Your Information a. We will keep
              your data for as long as necessary to fulfill the purposes
              described in this privacy policy. However, we will also retain
              data subject to relevant provisions of applicable laws. b.
              Personal information that we process for any purpose or purposes
              may be maintained. c. Notwithstanding the other provisions of this
              Section, we will retain documents (including electronic documents)
              containing personal data if we believe that the documents may be
              relevant to any ongoing or prospective legal proceedings, and in
              order to establish, exercise or defend our legal rights (including
              providing information to others for the purposes of fraud
              prevention and reducing credit risk).
              <br /> &bull; Marketing and Communications 1. We strive to provide
              you with choices regarding certain personal data uses,
              particularly around marketing and advertising.
              <br />
              2. If you have registered with us or have previously asked us for
              information on our products or services and you have not opted out
              of receiving that marketing information, we may send you
              information on our range of products, services, promotions,
              special offers, and other information which we think you may find
              interesting by phone, email and/or SMS. <br /> 3. We will get your
              express opt-in consent before we share your personal data with any
              third party for marketing purposes.
              <br /> 4. You can ask us or third parties to stop sending you
              marketing messages at any time by contacting us by email at
              hello@monzonecredit.com <br /> &bull; Your Rights You have the
              following rights: a. the right to request access to your personal
              data; b. the right to the erasure of your personal data (“right to
              be forgotten”); c. the right to rectify or amend inaccurate or
              incomplete personal data; d. the right to object to the processing
              of your personal data; e. the right to portability of data; f. the
              right to lodge a complaint with the Court, the Nigeria Data
              Protection Commission (NDPC), or any other relevant supervisory
              authority; g. The right to object to automated processing of your
              personal data including profiling subject to the exceptions
              provided under the Nigeria Data Protection Act, 2023; and h. the
              right to withdraw consent to the processing of your personal data.
              Kindly note that the withdrawal of your consent shall not affect
              the lawfulness of data processing that occurred prior to the
              withdrawal.
              <br /> &bull; Security of Data We are very particular about
              preserving your privacy and protecting your data. Therefore, to
              avoid the loss, theft, misuse, and unauthorized access,
              disclosure, alteration, and destruction of your information, we
              have put in place a range of administrative, technical,
              organizational, and physical safeguards. Regular third-party
              audits are conducted at Monzone to ensure we use the latest
              technologies and best practices to protect data. Our employees are
              trained in data security and are bound by strict confidentiality
              provisions. Despite this, we cannot completely guarantee the
              security of any information you transmit via our online channels,
              as the internet is not an entirely secure place.
              <br /> &bull; International Transfer of Data 1. Your Personal Data
              may be transferred to Recipients located in several different
              countries. To achieve the purposes described in this Privacy
              Policy, we transfer your Personal Data to countries that may not
              offer an adequate level of protection or not considered to have
              adequate law by the Nigeria Data Protection Commission (NDPC).
              Where Personal Data is to be transferred to a country outside
              Nigeria, Monzone shall put adequate measures in place to ensure
              the security of such Personal Data. In particular, Monzone shall,
              among other things, conduct a detailed transfer impact assessment
              of whether the said country is on NDPC’s Whitelist of Countries
              with adequate data protection laws.
              <br /> &bull; Monzone may transfer information, including personal
              information, to a country and jurisdiction that does not have the
              same data protection laws as Nigeria. However, we always take
              steps to ensure that your information remains protected wherever
              it is stored and processed in accordance with applicable laws.
              Where required under applicable laws, you consent to the transfer
              of information and the use and disclosure of information about you
              as described in this Privacy Policy 3. Our data transfers to
              countries that do not offer an adequate level of protection are
              subject to either of the conditions in accordance with the Nigeria
              Data Protection Regulation. However, by your continuous use of
              this Platform, you grant consent to Monzone to only transfer
              Personal Data out of Nigeria on one of the following conditions:
              a. That Monzone shall ensure that the third party shall comply
              with this Privacy Policy in handling such data; b. The transfer is
              necessary for the performance of a contract between Monzone and
              the Data Subject or implementation of pre-contractual measures
              taken at the Data Subject’s request; c. The transfer is necessary
              to conclude a contract between Monzone and a third party in the
              interest of the Data Subject; d. The transfer is necessary for
              reason of public interest; e. The transfer is for the
              establishment, exercise, or defense of legal claims; f. The
              transfer is necessary in order to protect the vital interests of
              the Data Subjects or other persons, where the Data Subject is
              physically or legally incapable of giving consent. 3. To obtain
              any relevant information regarding any transfers of your Personal
              Data to third- party countries (including the relevant transfer
              mechanisms), please contact us at hello@monzonecredit.com <br />{" "}
              &bull; Users from Other Jurisdictions 1. The Platform is
              controlled and operated by us from Nigeria. If you are not a
              resident of Nigeria or you are located outside Nigeria, you are
              not authorized to use the Service. If you choose to use the
              Platform or provide information to us, please note that we may
              transfer the information, including personal information, outside
              of Nigeria and process it there. 2. We do not represent or warrant
              that the Platform, or any portion thereof, are appropriate or
              available for use in any particular jurisdiction.
              <br /> &bull; Those who choose to access the Platform do so on
              their own initiative and at their own risk, and are responsible
              for complying with all local laws, rules and regulations, and are
              subject to United States export controls in connection with your
              use of the Platform and are responsible for any violations of such
              controls, including, without limitation, any United States
              embargoes or other federal rules and regulations restricting
              exports. 4. We may limit the availability of the Platform, in
              whole or in part, to any person, geographic area or jurisdiction
              that we choose, at any time and in our sole discretion. 5.
              Personal information that you publish on the Platform or submit
              for publication on our Website may be available, via the Internet,
              around the world. We cannot prevent the use or misuse of such
              information by others. 6. You expressly agree to the transfers of
              personal information described in this section.
              <br /> &bull; Remedy in the Event of a Violation of Privacy Policy
              1. Where there is any perceived violation of your rights, we shall
              take appropriate steps to remedy such violations, once confirmed.
              You shall be appropriately informed of the remedies employed. In
              the event of a data breach, we shall within 72 (seventy-two) hours
              of having knowledge of such breach report the details of the
              breach to the NDPC. Furthermore, we will notify you immediately
              via email if the breach will result in risk and danger to your
              rights and freedoms. 2. If you have any complaints regarding our
              compliance with this Privacy Policy, please email us at
              hello@monzonecredit.com. We will investigate and attempt to
              resolve complaints and disputes regarding the use and disclosure
              of personal information within thirty (30) days in accordance with
              this Privacy Policy and in accordance with applicable law and
              regulation. 3. If you feel that your Personal Data has not been
              handled correctly or you are unhappy with our response to any
              requests you have made to us regarding the use of your Personal
              Data, you have a right to lodge a complaint with the NITDA. The
              contact details are:
              <br /> &bull; Nigeria Data Protection Commission (NDPC Tel:
              +234929220263, +2348168401851, +2347052420189 Email:
              info@ndpb.gov.ng Website: www. ndpb.gov.ng <br /> &bull;
              Contacting Us If you have any complaints or any questions about
              any aspect of this privacy policy or your information, or to
              exercise any of your rights as described in this privacy policy or
              under data protection laws, you can contact us at
              hello@monzonecredit.com.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
