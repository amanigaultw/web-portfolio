import SectionHeader from './SectionHeader'
import PublicationCard from './PublicationCard'

const publications = [
  {
    title: 'The Role of Social-Evaluative Threat for Cortisol Profiles in Response to Psychosocial Stress: A Person-Centered Approach',
    year: "2025",
    authors: ['Peggy M Zoccola', 'Andrew W Manigault', 'Gabby Decastro', 'Taylor Courtney', 'Sally S Dickerson'],
    journal: "American Psychologist",
    link: 'https://doi.org/10.1037/amp0001335'
  },
  {
    title: 'Acoustic Cry Characteristics in Preterm Infants and Developmental and Behavioral Outcomes at 2 Years of Age',
    year: "2023",
    authors: ['Andrew W Manigault', 'Stephen J Sheinkopf', 'Brian S Carter', 'Jennifer Check', 'Jennifer Helderman', 'Julie A Hofheimer', 'Elisabeth C McGowan', 'Charles R Neal', 'Michael O’Shea', 'Steven Pastyrnak', 'Lynne M Smith', 'Todd M Everson', 'Carmen J Marsit', 'Lynne M Dansereau', 'Sheri A DellaGrotta', 'Barry M Lester'],
    journal: "JAMA Network Open",
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2800870'
  },
  {
    title: 'Newborn Cry Acoustics in the Assessment of Neonatal Opioid Withdrawal Syndrome Using Machine Learning',
    year: "2022",
    authors: ['Andrew W Manigault', 'Stephen J Sheinkopf', 'Harvey F Silverman', 'Barry M Lester'],
    journal: "JAMA Network Open",
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2797784'
  },
  {
    title: 'Psychosocial Resilience to Inflammation-Associated Depression: A Prospective Study of Breast-Cancer Survivors',
    year: "2022",
    authors: ['Andrew W Manigault', 'Kate R Kuhlman', 'Michael R Irwin', 'Steve W Cole', 'Patricia A Ganz', 'Catherine M Crespi', 'Julienne E Bower'],
    journal: "Psychological Science",
    link: 'https://doi.org/10.1177/09567976221079633'
  },
  {
    title: 'Younger Women Are More Susceptible to Inflammation: A Longitudinal Examination of the Role of Aging in Inflammation and Depressive Symptoms',
    year: "2022",
    authors: ['Kate R Kuhlman', 'Michael R Irwin', 'Patricia A Ganz', 'Steve W Cole', 'Andrew W Manigault', 'Catherine M Crespi', 'Julienne E Bower'],
    journal: "Journal of Affective Disorders",
    link: 'https://doi.org/10.1016/j.jad.2022.05.019'
  },
  {
    title: 'Psychoneuroimmunology: How Chronic Stress Makes Us Sick',
    year: "2022",
    authors: ['Andrew W Manigault', 'Peggy M Zoccola'],
    journal: "Biopsychosocial Factors of Stress, and Mindfulness for Stress Reduction",
    link: 'https://doi.org/10.1007/978-3-030-81245-4_4'
  },
  {
    title: 'Moderators of Inflammation-related Depression: a Prospective Study of Breast Cancer Survivors',
    year: "2021",
    authors: ['Andrew W Manigault', 'Patricia A Ganz', 'Michael R Irwin', 'Steve W Cole', 'Kate R Kuhlman', 'Julienne E Bower'],
    journal: "Translational Psychiatry",
    link: 'https://www.nature.com/articles/s41398-021-01744-6'
  },
  {
    title: 'Gender Roles are Related to Cortisol Habituation to Repeated Social Evaluative Stressors in Adults: Secondary Analyses from a Randomized Controlled Trial',
    year: "2021",
    authors: ['Andrew W Manigault', 'Ryan C Shorey', 'Haley Appelmann', 'Katrina R Hamilton', 'Matt C Scanlin', 'Robert-Paul Juster', 'Peggy M Zoccola'],
    journal: "Stress",
    link: 'https://doi.org/10.1080/10253890.2021.1892069'
  },
  {
    title: 'Examining Practice Effects in a Randomized Controlled Trial: Daily Life Mindfulness Practice Predicts Stress Buffering Effects of Mindfulness Meditation Training',
    year: "2021",
    authors: ['Andrew W Manigault', 'Jeremiah Slutsky', 'Julianna Raye', 'John David Creswell'],
    journal: "Mindfulness",
    link: 'https://link.springer.com/article/10.1007/s12671-021-01718-1'
  },
  {
    title: 'Vulnerability to Inflammation-related Depressive Symptoms: Moderation by Stress in Women with Breast Cancer',
    year: "2021",
    authors: ['Andrew W Manigault', 'Kate R Kuhlman', 'Michael R Irwin', 'Steve W Cole', 'Patricia A Ganz', 'Catherine M Crespi', 'Julienne E Bower'],
    journal: "Brain, behavior, and immunity",
    link: 'https://doi.org/10.1016/j.bbi.2021.03.004'
  },
  {
    title: 'Standardized Stress Reduction Interventions and Blood Pressure Habituation: Secondary Results from a Randomized Controlled Trial.',
    year: "2021",
    authors: ['Andrew W Manigault', 'Ryan C Shorey', 'Gabrielle Decastro', 'Haley M Appelmann', 'Katrina R Hamilton', 'Matt C Scanlin', 'Christopher R France', 'Peggy M Zoccola'],
    journal: "Health Psychology",
    link: 'https://psycnet.apa.org/buy/2021-19828-005'
  },
  {
    title: 'Daily Stressors and Diurnal Cortisol Among Sexual and Gender Minority Young Adults.',
    year: "2021",
    authors: ['Wilson S Figueroa', 'Peggy M Zoccola', 'Andrew W Manigault', 'Katrina R Hamilton', 'Matt C Scanlin', 'Ryan C Johnson'],
    journal: "Health Psychology",
    link: 'https://psycnet.apa.org/buy/2020-90022-001'
  },
  {
    title: 'Corroborative Evidence for an Association Between Initial Hypothalamic-Pituitary-Adrenocortical Axis Reactivity and Subsequent Habituation in Humans',
    year: "2020",
    authors: ['Andrew W Manigault', 'Peggy M Zoccola', 'Stefan Wüst', 'Ilona S Yim'],
    journal: "Psychoneuroendocrinology",
    link: 'https://doi.org/10.1016/j.psyneuen.2020.104798'
  },
  {
    title: 'When Enhanced Awareness Threatens: Interactive Effects of Domain‐Specific Awareness and Acceptance Manipulations on Cardiovascular Indices of Challenge and Threat',
    year: "2020",
    authors: ['Andrew W Manigault', 'Brett J Peters', 'Peggy M Zoccola'],
    journal: "Psychophysiology",
    link: 'https://doi.org/10.1111/psyp.13697'
  },
  {
    title: 'Rumination',
    year: "2020",
    authors: ['Andrew W Manigault', 'Peggy M Zoccola'],
    journal: "The wiley encyclopedia of health psychology",
    link: 'https://doi.org/10.1002/9781119057840.ch106'
  },
  {
    title: 'Childhood Adversity and Cortisol Habituation to Repeated Stress in Adulthood',
    year: "2020",
    authors: ['Peggy M Zoccola', 'Haley Appelmann', 'Andrew W Manigault', 'Ryan C Shorey'],
    journal: "Psychoneuroendocrinology",
    link: 'https://doi.org/10.1016/j.psyneuen.2020.105118'
  },
  {
    title: 'Mindfulnes-Based Stress Reduction for Older Couples with Metabolic Syndrome: a Pilot Randomized Controlled Trial',
    year: "2020",
    authors: ['Joan K Monin', 'Christina M Sperduto', 'Andrew W Manigault', 'Anne Dutton', 'Margaret S Clark', 'Ania M Jastreboff'],
    journal: "Mindfulness",
    link: ''
  },
  {
    title: 'Gender Differences in Short-term Cardiovascular Effects of Giving and Receiving Support for Health Concerns in Marriage.',
    year: "2019",
    authors: ['Joan K Monin', 'Andrew W Manigault', 'Becca R Levy', 'Richard Schulz', 'Ajua Duker', 'Margaret S Clark', 'Peter H Van Ness', 'Trace Kershaw'],
    journal: "Health Psychology",
    link: 'https://doi.org/10.1037/hea0000777'
  },
  {
    title: 'Cognitive Behavioral Therapy, Mindfulness, and Cortisol Habituation: A Randomized Controlled Trial',
    year: "2019",
    authors: ['Andrew W Manigault',  'Ryan C Shorey', 'Katrina Hamilton', 'Matt C Scanlin', 'Alex Woody', 'Wilson S Figueroa', 'Christopher R France', 'Peggy M Zoccola'],
    journal: "Psychoneuroendocrinology",
    link: 'https://doi.org/10.1016/j.psyneuen.2019.03.009'
  },
  {
    title: 'Testosterone to Cortisol Ratio and Aggression Toward One’s Partner: Evidence for Moderation by Provocation',
    year: "2019",
    authors: ['Andrew W Manigault', 'Peggy M Zoccola', 'Katrina Hamilton', 'Brian T Wymbs'],
    journal: "Psychoneuroendocrinology",
    link: 'https://doi.org/10.1016/j.psyneuen.2019.01.018'
  },
  {
    title: 'When Family Matters Most: A Test of the Association Between Sexual Minority Identity Disclosure Context and Diurnal Cortisol in Sexual Minority Young Adults',
    year: "2018",
    authors: ['Andrew W Manigault', 'Wilson S Figueroa', 'Cari R Hollenbeck', 'Anna E Mendlein', 'Alex Woody', 'Katrina R Hamilton', 'Matt C Scanlin', 'Ryan C Johnson', 'Peggy M Zoccola'],
    journal: "Psychosomatic Medicine",
    link: 'https://pubmed.ncbi.nlm.nih.gov/30095673/'
  },
  {
    title: 'Education is Associated with the Magnitude of Cortisol Responses to Psychosocial Stress in College Students',
    year: "2018",
    authors: ['Andrew W Manigault', 'Alex Woody', 'Peggy M Zoccola', 'Sally S Dickerson'],
    journal: "International journal of behavioral medicine",
    link: 'https://link.springer.com/article/10.1007/s12529-018-9727-y'
  },
  {
    title: 'A Test of the Association Between Mindfulness Subcomponents and Diurnal Cortisol Patterns',
    year: "2018",
    authors: ['Andrew W Manigault', 'Wilson S Figueroa', 'Cari R Hollenbeck', 'Anna E Mendlein', 'Alex Woody', 'Samantha E Sinegar', 'Katrina R Hamilton', 'Matt C Scanlin', 'Ryan C Johnson', 'Peggy M Zoccola'],
    journal: "Mindfulness",
    link: 'https://link.springer.com/article/10.1007/s12671-017-0829-4'
  },
  {
    title: 'Trait mindfulness predicts the presence but not the magnitude of cortisol responses to acute stress',
    year: "2018",
    authors: ['Andrew W Manigault', 'Alex Woody', 'Peggy M Zoccola', 'Sally S Dickerson'],
    journal: "Psychoneuroendocrinology",
    link: 'https://doi.org/10.1016/j.psyneuen.2018.01.022'
  },
  {
    title: 'Trait Rumination Predicts Elevated Evening Cortisol in Sexual and Gender Minority Young Adults',
    year: "2017",
    authors: ['Peggy M Zoccola', 'Andrew W Manigault', 'Wilson S Figueroa', 'Cari Hollenbeck', 'Anna Mendlein', 'Alex Woody', 'Katrina Hamilton', 'Matt Scanlin', 'Ryan C Johnson'],
    journal: "International Journal of Environmental Research and Public Health",
    link: 'https://doi.org/10.3390/ijerph14111365'
  },
  {
    title: 'Assessment of Unconscious Decision Aids Applied to Complex Patient-Centered Medical Decisions',
    year: "2015",
    authors: ['Andrew W Manigault', 'Ian M Handley', 'Summer R Whillock'],
    journal: "Journal of medical Internet research",
    link: 'https://doi.org/10.2196/jmir.3739'
  }
]

export default function Publications() {
  return (
    <section id="publications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeader title="Publication" />
      <div>
        <ul className="group/list">
          {publications.map((publication, idx) => (
            <PublicationCard key={idx} {...publication} />
          ))}
        </ul>
      </div>
    </section>
  )
}