import command from '../../config.json' assert {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";
  
  const X = "X (Twitter)"
  const LINKEDIN = "Linkedin";
  const GITHUB = "Github";
  const DEVTO = "dev.to"
  const EMAIL = "Email";
  
  const x = `<i class='fa-solid fa-x'></i> ${X}`;   
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const devto = `<i class="fa-solid fa-newspaper"></i> ${DEVTO}`;   
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  let string = "";

  about.push("<br>");
  about.push(command.aboutGreeting);
  about.push("<br>");
  string += SPACE.repeat(2);
  string += x;
  string += SPACE.repeat(17 - X.length);
  string += `<a target='_blank' href='https://x.com/${command.social.x}'>x/${command.social.x}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);
  
  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += devto;
  string += SPACE.repeat(17 - DEVTO.length);
  string += `<a target='_blank' href='https://dev.to/${command.social.devto}'>dev.to/${command.social.devto}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  about.push("<br>");
  return about
}

export const ABOUT = createAbout();
