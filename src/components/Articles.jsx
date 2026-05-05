import React from 'react';
import { useNavigate } from 'react-router-dom';
import Resume from "../../public/images/resume.png";
import Job from "../../public/images/job.png";
import LinkedIn from "../../public/images/linkedin.png";
import './Articles.css';

export const articles = [
  {
    id: 1,
    title: "Focus on Impact, Not Responsibilities",
    image: Resume,
    content: "One of the most effective ways to stand out in a resume is to shift your focus from responsibilities to impact. Many candidates make the mistake of simply listing what they were assigned to do, such as “managed social media” or “assisted in projects,” which does not differentiate them from others with similar experience. What truly catches a recruiter’s attention is measurable impact. Instead of describing tasks, you should highlight outcomes and results, such as improvements, growth, efficiency gains, or achievements you contributed to. For example, saying “increased social media engagement by 45% in three months by improving content strategy” is far more powerful than simply stating that you managed social media accounts. Even if exact numbers are not available, you can still describe scale or relative improvement. Recruiters often scan resumes quickly, so impact-driven statements help them immediately understand your value and potential contribution."
  },
  {
    id: 2,
    title: "Tailor Every Application",
    image: Job,
    content: "A common mistake many applicants make is using the same resume and cover letter for every job they apply to. This approach makes applications feel generic and significantly reduces the chances of standing out. Instead, each application should be tailored specifically to the role and company. This means carefully reading the job description, identifying key skills and repeated requirements, and aligning your experience to match them. Your cover letter should never feel like a template; it should clearly explain why you are interested in that specific company and how your skills connect directly to their needs. For example, instead of saying “I am interested in this role because I like marketing,” a stronger approach would be “I am applying because your focus on data-driven marketing aligns with my experience improving campaign performance by 30%.” Personalization shows effort, attention to detail, and genuine interest, all of which are highly valued by employers."
  },
  {
    id: 3,
    title: "Show Thinking, Not Just Experience",
    image: LinkedIn,
    content: "To stand out in both resumes and cover letters, it is not enough to simply list experiences—you must also show how you think. Employers are not only interested in what you have done, but also in how you approach problems and make decisions. This is especially important for students or early-career candidates who may not yet have extensive professional experience. Instead of just stating that you completed a project, you should briefly explain your thought process, such as how you identified the problem, what strategy you used, and what results or improvements followed. For instance, rather than saying “built a website for a school project,” you could explain that you first researched user needs to improve usability, which led to a more efficient design and positive user feedback. In cover letters, demonstrating your reasoning, adaptability, and learning mindset helps employers see your potential beyond your current experience. It shows that you are not just task-oriented, but capable of growth and critical thinking."
  }
];

const Articles = () => {
  const navigate = useNavigate();

  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + " ... See More...";
    }
  };

  return (
    <div className='articles'>
      <h1>ARTICLES</h1>
      <p>Discover helpful articles tailored to refining your resume and cover letter to increase your chances to find your comfort job!</p>
      <div className='the-articles'>
        {articles.map((article) => (
          <div
            className='article'
            key={article.id}
            onClick={() => navigate(`/articles/${article.id}`)}
          >
            <img src={article.image} alt="" />
            <h3>{article.title}</h3>
            <p>{truncateText(article.content)}</p>
            <a href={`/articles/${article.id}`}>LEARN MORE</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Articles
