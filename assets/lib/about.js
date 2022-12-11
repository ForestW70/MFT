export const aboutInfo = [
    {
        type: "h2",
        body: "Marble Freedom Trust -- Non-profit",
    },
    {
        type: "p",
        body: "The Marble Freedom Trust is a right-of-center organization founded in 2020 by Leonard Leo, a conservative legal activist and former executive vice president of the Federalist Society [1]. Its largest known source of funding came from a donation of company shares by Barre Seid [2], an electronics manufacturing mogul, that were later sold by Marble for $1.6 billion.",
    },
    {
        type: "h2",
        body: "Background",
    },
    {
        type: "p",
        body: "Marble Freedom Trust is a conservative organization founded in 2020 by former Federalist Society executive vice president Leonard Leo.",
    },
    {
        type: "p",
        body: "Marble Freedom Trust was organized as a trust rather than as a corporation. This means it does not have to disclose as many details about financials, location, and personnel.",
    },
    {
        type: "p",
        body: "At the end of April 2021, Marble Freedom Trust had more than $1.4 billion in assets.",
    },
    {
        type: "h2",
        body: "Funding",
    },
    {
        type: "p",
        body: "Barre Seid, the former chairman and CEO of electronics manufacturer Tripp Lite, is the largest known contributor to Marble Freedom Trust. The New York Times reported in August 2022 that he had given an “unusual $1.6 billion donation” to Marble.",
    },
    {
        type: "p",
        body: "The donation was somewhat indirect. In 2021, Barre Seid gave 100 percent of Tripp Lite shares to Marble Freedom Trust. Marble Freedom Trust sold the shares for Tripp Lite to Eaton Corporation, an Irish conglomerate, taking the proceeds. This allowed Seid to avoid paying as much as $400 million in capital gains taxes than if he had sold the company directly to a private buyer, increasing the effective size of his gift to Marble.",
    },
    {
        type: "p",
        body: "Marble Freedom Trust did not publicly say who bought the company. But it was purchased on March 17, 2021, according to the tax form; that same day, Securities and Exchange Commission (SEC) documents show that Eaton acquired Tripp Lite for $1.65 billion.",
    },
    {
        type: "h2",
        body: "Expenditures",
    },
    {
        type: "p",
        body: "As of August 2022, Marble Freedom Trust was known to have donated about $200 million to other conservative organizations.",
    },
    {
        type: "p",
        body: "The trust contributed $153 million to the Rule of Law Trust, a conservative legal nonprofit that is also led by Leo. ",
    },
    {
        type: "p",
        body: "Marble Freedom Trust contributed $41.1 million to Donors Trust [3], a donor-advised fund that awards money to various conservative and libertarian groups as well as nonpolitical organizations.",
    },
    {
        type: "p",
        body: "The group gave $16.5 million to the Concord Fund, a nonprofit that supports conservative judicial nominees that is affiliated with the Judicial Crisis Network [4].",
    },
    {
        type: "p",
        body: "Marble Freedom Trust also gave $18 million to Schwab Charitable Fund [5], another donor-advised fund.",
    },
    {
        type: "h2",
        body: "Leadership",
    },
    {
        type: "p",
        body: "Leonard Leo is a member of the board of trustees for Marble Freedom Trust. As executive vice president of the Federalist Society, he played a significant role in helping to select a list of potential Supreme Court nominees for presidential candidate Donald Trump. Leo is listed as earning $350,000 annually from the Marble Freedom Trust for 25 hours of work per week for the group.",
    },
    {
        type: "p",
        body: "Tyler Green is a member of the board of trustees for Marble Freedom Trust. Listed as the “administrative trustee,” his home address in North Salt Lake, Utah is listed as the address for the organization. Green is a former Utah solicitor general. He has represented the Republican National Committee [6] in election-related lawsuits. Green is a former law clerk for Supreme Court Justice Clarence Thomas [7].",
    },
    {
        type: "p",
        body: "Jonathan Bunch is a member of the board of trustees for Marble Freedom Trust. Bunch is a former Federalist Society vice president. He is listed as the group’s successor trustee.",
    },
    {
        type: "span",
        body: [
            {
                loc: "1",
                item: "Federalist Society",
                src: "https://www.influencewatch.org/non-profit/federalist-society-for-law-and-public-policy-studies/",
            },
            {
                loc: "2",
                item: "Barre Seid",
                src: "https://www.influencewatch.org/person/barre-seid/",
            },
            {
                loc: "3",
                item: "Donors Trust",
                src: "https://www.influencewatch.org/non-profit/donors-trustdonors-capital-fund/",
            },
            {
                loc: "4",
                item: "Judicial Crisis Network",
                src: "https://www.influencewatch.org/non-profit/judicial-crisis-network/",
            },
            {
                loc: "5",
                item: "Schwab Charitable Fund",
                src: "https://www.influencewatch.org/non-profit/schwab-charitable-fund/",
            },
            {
                loc: "6",
                item: "Republican National Committee",
                src: "https://www.influencewatch.org/political-party/republican-national-committee/",
            },
            {
                loc: "7",
                item: "Clarence Thomas",
                src: "https://ballotpedia.org/Clarence_Thomas_(Supreme_Court)",
            },
            
        ],
    },
]

const buildAbout = () => {
    const aboutFrag = document.createDocumentFragment();
    aboutInfo.map(e => {
        if (e.type === "h2") {
            const heddy = document.createElement("h2");
            heddy.classList.add("ab-head");
            heddy.innerText = e.body;
            aboutFrag.appendChild(heddy);
        } else if (e.type === "p") {
            const par = document.createElement("p");
            par.classList.add("ab-pp");
            par.innerText = e.body;
            aboutFrag.appendChild(par);
        } else {
            const rest = document.createElement("span");
            rest.classList.add("ab-rest");
            rest.innerText = e.body;
            aboutFrag.appendChild(rest);
        }
    });

    return aboutFrag;
}