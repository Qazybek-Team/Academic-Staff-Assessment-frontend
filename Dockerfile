FROM node:12

RUN mkdir -p /app
WORKDIR /app

# install dependencies
COPY package.json package-lock.json /app/
RUN npm install

# copy the project code
COPY . /app/

# expose the server port
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=3000


# define the default command to run when starting the container
CMD ["npm", "run", "dev"]
