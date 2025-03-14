import subprocess
import sys

def main():
    try:
        tag = input("What tag it shall be: ")

        subprocess.run(["npm", "run", "build"], check=True)

        subprocess.run(["docker", "build", "-t", f"shehtersammy/translit:{tag}", "."], check=True)

        subprocess.run(["docker", "push", f"shehtersammy/translit:{tag}"], check=True)

        subprocess.run(["kubectl", "config", "use-context", "k3s-context"], check=True)

        subprocess.run(["kubectl", "set", "image", "deployment/translit", f"translit=shehtersammy/translit:{tag}"], check=True)
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
